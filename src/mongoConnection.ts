import mongoose from 'mongoose'
import config from 'config'
const ConnectionStringWOpass = config.get('database.connectionString') as string;
const databasePassStub = config.get('database.passwordStub') as string;
const databasePass = config.get('database.password') as string;
const connectionString = ConnectionStringWOpass.replace(databasePassStub, databasePass);

const connect = async (): Promise<void> | never => {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.info(`Successfully connected to the database`);
    }
export {connect}