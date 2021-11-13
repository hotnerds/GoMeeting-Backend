import express from 'express';
import cors from 'cors';
import config from '../config/index.js';
import routes from '../api/index.js';
export default ({ app }) => {
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
    app.get('/', (req, res) => {
        res.end("main");
        console.log(req.cookies);
    });
    app.use((err, req, res, next) => {
        console.log(err);
    });
};
//# sourceMappingURL=express.js.map