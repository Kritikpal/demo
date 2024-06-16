import dotenv from 'dotenv';

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' :
                process.env.NODE_ENV === 'production' ? '.env.production' :
                '.env';

dotenv.config({ path: envFile });

console.log(`Environment variables loaded from ${envFile}`);
