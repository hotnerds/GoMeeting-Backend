import 'reflect-metadata';

import config from './config/index.js';

import express from 'express';

import Loaders from './loaders/index.js';

import Logger from './loaders/logger.js';

async function startServer() {
    const app = express();

    try {
        await Loaders({expressApp: app});
    }catch(e) {
        Logger.error(e);
        throw e;
    }

    app.listen(config.port, () => {
        Logger.info(`Server is running on PORT: ${config.port}`);
    }).on('error', err => {
        Logger.error(err);
        process.exit(1);
    });
}

startServer();
















// import express, {NextFunction, Request, Response} from 'express';
// import http from 'http';
// import mongoose from 'mongoose';
// import config from './config/index.js';
// import {Strategy as GoogleStrategy, VerifyCallback} from 'passport-google-oauth2';
// import passport from 'passport';

// const app = express();
// const server = http.createServer(app);

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: config.GOOGLE_CLIENT_ID,
//             clientSecret: config.GOOGLE_CLIENT_SECRET,
//             callbackURL: "http://localhost:3000/auth/google/callback",
//             passReqToCallback: true
//         },
//         (request: Request, accessToken: string, refreshToken: string, profile:any, done:VerifyCallback) => {
//             console.log(profile);
//             console.log(accessToken);
            
//             return done(null);
//         }
//     )
// )



// const conn = mongoose.connect(config.databaseURL, () => {
//     console.log("MongoDB is connected.....");
// });

// app.get('/', (req: Request, res:Response) => {
//     res.end("now authenticated");
// });

// app.get('/login', (req: Request, res:Response)  => {
//     res.end("login");
// })

// app.get('/auth/google', (req: Request, res: Response, next: NextFunction) => {
//     passport.authenticate('google', {scope: ['email', 'profile']})(req, res, next)
// })

// app.get('/auth/google/callback', (req:Request, res:Response, next: NextFunction) => {
//     passport.authenticate("google", {
//         successRedirect: "/",
//         failureRedirect: "/login"
//     })(req, res, next);
// })

// server.listen(config.port, () => {
//     console.log(`Server is running on ${config.port}`);
// })







