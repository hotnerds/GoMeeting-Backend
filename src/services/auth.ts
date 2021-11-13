import {Service, Inject} from 'typedi';
import config from '../config/index.js';
import argon2 from 'argon2';
//import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import { UserSignUpInputDto, UserSignInInputDto } from '../interfaces/LocalUserInputDto.js';
import { LocalAuthInterface } from '../interfaces/LocalAuthInterface.js';
// import { OAuthInterface } from '../interfaces/OAuthInterface.js';
// import { OAuthUserInputDto } from '../interfaces/OAuthUserInputDto.js';
import winston from 'winston';
import { UserRepository } from '../repositories/UserRepository.js';
import events from '../subscribers/events.js';
import jwt from 'jsonwebtoken';
import { UserModelInterface } from '../interfaces/UserModelInterface.js';

@Service()
export class LocalAuthService implements LocalAuthInterface {
    constructor(
        @Inject('logger') private logger: winston.Logger,
        @Inject() private userRepository: UserRepository
        //@EventDispatcher() private eventDispatcher: EventDispatcherInterface
    ) {}

    public async signUp(userInputDto: UserSignUpInputDto): Promise<string> {

        this.logger.info("Hashing password");
        const hashedPassword = await argon2.hash(userInputDto.password);

        userInputDto['password'] = hashedPassword;
        const user =  await this.userRepository.localCreate(userInputDto);
        this.logger.info("[signUp]: User is created...");
        
        Reflect.deleteProperty(user, "password");

        this.logger.info("[signUp]: User is created...");
        return generateToken(user);
    }

    public async signIn(userInputDto: UserSignInInputDto) : Promise<string> {
        return new Promise((resolve, resject) => {

        })
    }
}

// @Service()
// export class OAuthService implements OAuthInterface {

//     constructor(
//         @Inject('logger') private logger: winston.Logger,
//         @Inject() private userRepository: UserRepository
//        //@EventDispatcher() private eventDispatcher: EventDispatcherInterface
//     ) {}

//     public async signIn(userInputDto: OAuthUserInputDto): Promise<string> {

//         //this.logger.info(`eventDispatcher dispatchs ${events.user.signIn}`);
//         //this.eventDispatcher.dispatch(events.user.signIn, email);
//         const email = userInputDto.profile.email;
//         const name = userInputDto.profile.displayName

//         this.logger.info("[SignIn]: validate it is registered");
//         const isRegistered = await this.userRepository.isRegistered(email);


//         if(isRegistered) {
//             this.logger.info("[SignIn]: user is validated and return token");
//             const user = await this.userRepository.findByEmail(email);
//             return generateToken(user);
//         }

//         this.logger.info("[SignIn]: user is not validated and create user");
//         const newUser = await this.userRepository.oauthCreate({email, name});

//         this.logger.info("[SignIn]: user is created and return token ");
//         return generateToken(newUser);
//     } 
// }

function generateToken(user: UserModelInterface): string {
    const token = jwt.sign({
        _id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, config.jwtSecret);

    return token;
}
