import mongoose from 'mongoose'
import config from 'config'
import {logger} from '../app/Utils/Log';

const ConnectionStringWOpass = config.get('database.connectionString') as string;
const databasePassStub = config.get('database.passwordStub') as string;
const databasePass = config.get('database.password') as string;
const connectionString = ConnectionStringWOpass.replace(databasePassStub, databasePass);

const connect = async (): Promise<void> | never => {
    logger.info('Connecting to the DB...');
    await mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
    logger.info(`Successfully connected to the database`);
}
    
export {
    connect
}