import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const USER_SERVICE_URL = 'http://localhost:4006/api/usuarios';

export const validateUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await axios.post(`${USER_SERVICE_URL}/validate`, { email, password });  // Acá falla
    return response.data; // Devuelve los datos del usuario
  } catch (error: any) {
    console.error('Error al validar usuario:', error.response?.data || error.message);
    return null;
  }
};
