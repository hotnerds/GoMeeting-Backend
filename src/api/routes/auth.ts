import {Router, Request, Response, NextFunction} from 'express';
import {celebrate, Joi} from 'celebrate';
import passport from 'passport';
import {Container} from 'typedi';
import winston from 'winston';

const route = Router();

export default (app: Router) => {
    app.use('/auth', route);

    //route.get('/google', passport.authorize("google", {scope: ["https://www.googleapis.com/auth/user.gender.read","email", "profile"]}));

    // route.get('/google/callback',passport.authorize("google", {
    //     failureRedirect: "/login"
    // }),(req: Request, res: Response) => {
    //     const logger = Container.get<winston.Logger>("logger");

    //     logger.info(`token ${req.body.token}`);

    //     return res.redirect(`/?token=${req.body.token}`);
    // })

    
}