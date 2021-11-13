var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Inject, Service } from 'typedi';
import UserModel from '../model/User.js';
import winston from 'winston';
import argon2 from 'argon2';
let UserRepository = class UserRepository {
    constructor(logger) {
        this.logger = logger;
    }
    async oauthCreate(userInfo) {
        const user = new UserModel({
            name: userInfo.name,
            email: userInfo.email
        });
        this.logger.info('User is created...');
        await user.save();
        this.logger.info('User is saved...');
        return user;
    }
    async localCreate(userInfo) {
        if (userInfo.password == undefined) {
            this.logger.error("user password undefined");
            throw new Error("user password undefined");
        }
        const hashedPassword = await argon2.hash(userInfo.password);
        this.logger.info('UserPassword is hashed...');
        const user = new UserModel({
            name: userInfo.name,
            email: userInfo.email,
            password: hashedPassword
        });
        this.logger.info('User is created...');
        await user.save();
        this.logger.info('User is saved...');
        return user;
    }
    async isRegistered(email) {
        this.logger.info('[isRegistered]: try to find user');
        const user = await UserModel.findOne({ email });
        if (user == null) {
            this.logger.info('[isRegistered]: user is not found');
            return false;
        }
        this.logger.info('[isRegistered]: user is found');
        return true;
    }
    async findByEmail(email) {
        const user = await UserModel.findOne({ email });
        if (user == null) {
            this.logger.error('[findByEmail]: user is not found');
            throw new Error("Cannot found user");
        }
        return user;
    }
};
UserRepository = __decorate([
    Service(),
    __param(0, Inject('logger')),
    __metadata("design:paramtypes", [Object])
], UserRepository);
export { UserRepository };
//# sourceMappingURL=UserRepository.js.map