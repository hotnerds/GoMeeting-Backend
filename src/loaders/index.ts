import expressLoader from './express.js';
import mongooseLoader from './mongoose.js';
import dependencyInjector from './dependencyInjector.js';
import Logger from './logger.js';
import { Application } from 'express';

export default async ({expressApp}: {expressApp: any}) => {

    try {
        mongooseLoader();
        dependencyInjector();

        await expressLoader({app: expressApp});
    }catch(e) {
        console.log(e);
    }
    
}
