import dotenv from 'dotenv'
const envFound = dotenv.config();

if(envFound.error) {
    throw new Error("Couldn't find .env file");
}

export default {
    port: process.env.PORT || 3000,

    databaseURL: process.env.MONGODB_URI || " ",
    
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || " ",
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || " ",
    NODE_ENV: process.env.NODE_ENV || "development",
    
    apiPrefix: process.env.API_PREFIX || "/api",
    jwtSecret: process.env.JWT_SECRET || ""
}