import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
import * as Joi from '@hapi/joi';


// joi
const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string().default('dev'),
    PORT: Joi.number().default(9000)
}).unknown().required();

const {value: envVars} = envVarsSchema.validate(process.env);
const configuration: IConfig = Object.freeze({
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    secret: envVars.TOKEN_SECRET,
    mongoUrl: envVars.MONGO_URL
});

export default configuration;