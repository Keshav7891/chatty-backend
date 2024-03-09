import dotenv from 'dotenv';
import bunyan from 'bunyan';

dotenv.config({});

class Config{
    public DATABSE_URL : string | undefined;
    public CLIENT_URL : string | undefined;
    public REDIS_HOST : string | undefined;

    constructor(){
        this.DATABSE_URL = process.env.DATABSE_URL;
        this.CLIENT_URL = process.env.CLIENT_URL
        this.REDIS_HOST = process.env.REDIS_HOST;
    }

    public createLogger(name: string): bunyan {
        return bunyan.createLogger({ name, level: 'debug' });
    }

    public validateConfig(): void {
        for(const [key, value] of Object.entries(this)){
            if(value === undefined){
                throw new Error(`Config ${key} is undefined`);
            }
        }
    }
};

export const config: Config = new Config();