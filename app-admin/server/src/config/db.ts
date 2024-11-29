import mongoose from 'mongoose';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();  // Ensure that environment variables are loaded

export const connectDB = async () => {
    try {
        const dbUrl = process.env.DATABASE_URL;
        
        // Check if DATABASE_URL is undefined or empty
        if (!dbUrl) {
            throw new Error('DATABASE_URL is not defined in environment variables.');
        }

        const { connection } = await mongoose.connect(dbUrl);
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.magenta.bold(`MongoDB conectado en: ${url}`));
    } catch (error) {
        console.log(colors.red.bold('Error al conectar a MongoDB'));
        console.error(error);  // Log the full error message
        process.exit(1);
    }
};
