import dotenv from 'dotenv'

dotenv.config()

const env = process.env
export const config = {
    PORT : env.PORT || 8080,
    DBNAME: env.DBNAME || 'veterinaria',
    DBUSER : env.DBUSER || 'root',
    DBPASS: env.DBPASS || '',
    DBHOST: env.DBHOST || 'localhost'


}
