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
import { Service, Inject } from 'typedi';
import config from '../config/index.js';
import argon2 from 'argon2';
// import { OAuthInterface } from '../interfaces/OAuthInterface.js';
// import { OAuthUserInputDto } from '../interfaces/OAuthUserInputDto.js';
import winston from 'winston';
import { UserRepository } from '../repositories/UserRepository.js';
import jwt from 'jsonwebtoken';
let LocalAuthService = class LocalAuthService {
    constructor(logger, userRepository
    //@EventDispatcher() private eventDispatcher: EventDispatcherInterface
    ) {
        this.logger = logger;
        this.userRepository = userRepository;
    }
    async signUp(userInputDto) {
        this.logger.silly("Hashing password");
        const hashedPassword = await argon2.hash(userInputDto.password);
        return new Promise((resolve, resject) => {
        });
    }
    async signIn(userInputDto) {
        return new Promise((resolve, resject) => {
        });
    }
};
LocalAuthService = __decorate([
    Service(),
    __param(0, Inject('logger')),
    __param(1, Inject()),
    __metadata("design:paramtypes", [Object, UserRepository
        //@EventDispatcher() private eventDispatcher: EventDispatcherInterface
    ])
], LocalAuthService);
export { LocalAuthService };
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
function generateToken(user) {
    const token = jwt.sign({
        _id: user._id,
        role: user.role,
        name: user.name,
        exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, config.jwtSecret);
    return token;
}
//# sourceMappingURL=auth.js.map