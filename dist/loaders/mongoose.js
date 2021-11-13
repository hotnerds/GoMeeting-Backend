import mongoose from 'mongoose';
import config from '../config/index.js';
import LoggerInstance from './logger.js';
export default async () => {
    try {
        const conn = await mongoose.connect(config.databaseURL, () => LoggerInstance.info("MongoDB is running"));
    }
    catch (e) {
        LoggerInstance.error("MongoDB is not connected");
        throw e;
    }
};
//# sourceMappingURL=mongoose.js.map