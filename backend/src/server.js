import app from './app.js';
import pool from './config/database.js'
import 'dotenv/config';

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await pool.query('SELECT NOW()');

        console.log('PostgreSQL conectado!');

        app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error('Error al intentar conectarse a PostgreSQL');
        console.error(error);
    }
};

startServer();