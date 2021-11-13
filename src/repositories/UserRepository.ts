import { Inject, Service } from 'typedi';
import UserModel from '../model/User.js';
import winston from 'winston';
import argon2 from 'argon2';
import { UserModelInterface } from '../interfaces/UserModelInterface.js';

@Service()
export class UserRepository {
    constructor(
        @Inject('logger') private logger: winston.Logger
    ) {}

    public async oauthCreate(userInfo: Partial<UserModelInterface>) : Promise<UserModelInterface> {
        const user = new UserModel({
            name: userInfo.name,
            email: userInfo.email
        });

        this.logger.info('User is created...');

        await user.save();

        this.logger.info('User is saved...');
        return user;
    }

    public async localCreate(userInfo: Partial<UserModelInterface>) : Promise<UserModelInterface> {

        if(userInfo.password == undefined) {
            this.logger.error("user password undefined");
            throw new Error("user password undefined");
        }

        const hashedPassword = await argon2.hash(userInfo.password);
        this.logger.info('UserPassword is hashed...')

        const user = new UserModel({
            name: userInfo.name,
            email: userInfo.email,
            password: hashedPassword,
            univercity: userInfo.univercity,
            gender: userInfo.gender,
            yearOfAdmission: userInfo.yearOfAdmission
        });

        this.logger.info('User is created...');

        await user.save();

        this.logger.info('User is saved...');
        return user;
    }

    public async isRegistered(email: string): Promise<boolean> {
        this.logger.info('[isRegistered]: try to find user');

        const user = await UserModel.findOne({email});

        if(user == null) {

            this.logger.info('[isRegistered]: user is not found');
            return false;
        }

        
        this.logger.info('[isRegistered]: user is found');
        return true;
    }

    public async findByEmail(email: string): Promise<UserModelInterface> {
        
        const user = await UserModel.findOne({email});

        if(user == null) {
            this.logger.error('[findByEmail]: user is not found');
            throw new Error("Cannot found user");
        }

        return user;
    }
}
