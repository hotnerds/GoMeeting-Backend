import express, {Request, Response, NextFunction} from 'express';
import cors from 'cors'
import config from '../config/index.js';
import swaggerUi from 'swagger-ui-express';
// import {Strategy as GoogleStrategy, VerifyCallback} from 'passport-google-oauth2';
// import passport from 'passport';
// import { OAuthUserInputDto } from '../interfaces/OAuthUserInputDto.js';
// import { OAuthService } from '../services/auth.js';
import {Container} from 'typedi';
import routes from '../api/index.js';
import winston from 'winston';

export default ({app} : {app: express.Application}) => {


    // passport.use(
    //     new GoogleStrategy(
    //         {
    //             clientID: config.GOOGLE_CLIENT_ID,
    //             clientSecret: config.GOOGLE_CLIENT_SECRET,
    //             callbackURL: "http://localhost:3000/api/auth/google/callback",
    //             passReqToCallback: true
    //         },
    //         async (request: Request, accessToken: string, refreshToken: string, profile:any, done:VerifyCallback) => {
    //             const logger = Container.get<winston.Logger>('logger');
    //             console.log(profile);
    //             const userInput: OAuthUserInputDto = {accessToken, refreshToken, profile };
    //             logger.info("[passport]: get OAuthService");
    //             const oauthService = Container.get(OAuthService);
    //             const token = await oauthService.signIn(userInput);
    //             logger.info("[passport]: user is signined");

                

    //             request.body.token = token;

    //             return done(null, token);
    //         }
    //     )
    // )

    //bodyParser
    app.use(express.json());

    //cors for all host 임시로 일단.
    app.use(cors());

    app.use(config.apiPrefix, routes());

    app.get('/', (req: Request, res: Response) => {
        res.end("main");
        console.log(req.cookies);
    })
    

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        console.log(err);
    })
}