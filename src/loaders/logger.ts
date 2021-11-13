import winston, { transports } from 'winston';
import winstonDaily from 'winston-daily-rotate-file';
import config from '../config/index.js'

const logDir = 'logs';
const transportFormat = [
    new winstonDaily({
        level: 'info',
        filename: `%DATE%.log`,
        dirname: logDir + '/error', 
        datePattern: 'YYYY-MM-DD',
        maxFiles: 30,
        zippedArchive: true,
    }),
    new winstonDaily({
        level: 'error',
        datePattern: 'YYYY-MM-DD',
        dirname: logDir + '/error',  
        filename: `%DATE%.error.log`,
        maxFiles: 30,
        zippedArchive: true,
      }),
];


const logFormat = winston.format.printf(info => {
    return `${info.timestamp} ${info.level}: ${info.message}`
})

const LoggerInstance = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        logFormat
    ),
    transports: transportFormat,
})

if(config.NODE_ENV == 'development') {
   LoggerInstance.add(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    )
} 

export default LoggerInstance;