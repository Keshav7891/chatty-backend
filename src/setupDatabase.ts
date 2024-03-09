import mongoose, { connection } from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export default () => {
    const connect = () => {
        mongoose.connect(`${config.DATABSE_URL}`).then(() => {
            log.info("Connected to database");
        }).catch( (error) => {
            log.error(`Error connecting to database : ${error}`);
            return process.exit(1);
        })
    };
    connect();

    mongoose.connection.on('disconnected' , connect);
};