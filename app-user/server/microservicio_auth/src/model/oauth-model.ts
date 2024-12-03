import jwt from 'jsonwebtoken';
import { validateUser } from '../services/user-service';
import { Token, User } from './types';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecreto';

console.log('Servidor de autenticación funcionando')
export const oauthModel = {
 
  getClient: async (clientId: string, clientSecret: string): Promise<any> => {
    const clients = [
      { clientId: 'raul', clientSecret: 'raulsecreto', grants: ['password'] },
      
    ];

    return clients.find((c) => c.clientId === clientId && c.clientSecret === clientSecret) || null;
  },

  getUser: async (email: string, password: string): Promise<User | null> => {
    const user = await validateUser(email, password);
    console.log('Usuario validado' + JSON.stringify(user));
    return user ? { id: user._id, email: user.email } : null;
  },

  saveToken: async (token: Token, client: any, user: User): Promise<any> => {
    const accessToken = jwt.sign({ userId: user.id, clientId: client.clientId }, JWT_SECRET, {
      expiresIn: typeof token.accessTokenExpiresAt === 'number' 
        ? token.accessTokenExpiresAt 
        : '1h',
    });
    return {
      accessToken,
      client,
      user,
      accessTokenExpiresAt: token.accessTokenExpiresAt || new Date(Date.now() + 3600 * 1000), // 1 hora
    };
  },

  getAccessToken: async (accessToken: string): Promise<any> => {
    try {
      const decoded = jwt.verify(accessToken, JWT_SECRET);
      if (typeof decoded !== 'object' || !decoded) throw new Error('Token inválido');
      return {
        user: { id: (decoded as jwt.JwtPayload)['userId'] },
        client: { id: (decoded as jwt.JwtPayload)['clientId'] },
      };
    } catch (error) {
      return null;
    }
  },

  saveRefreshToken: async (token: Token, client: any, user: User): Promise<any> => {
    const refreshToken = jwt.sign({ userId: user.id, clientId: client.clientId }, JWT_SECRET, {
      expiresIn: typeof token.refreshTokenExpiresAt === 'number' 
        ? token.refreshTokenExpiresAt 
        : '7d',
    });
    return {
      refreshToken,
      client,
      user,
      refreshTokenExpiresAt: token.refreshTokenExpiresAt || new Date(Date.now() + 7 * 24 * 3600 * 1000),
    };
  },

  getRefreshToken: async (refreshToken: string): Promise<any> => {
    try {
      const decoded = jwt.verify(refreshToken, JWT_SECRET);
      if (typeof decoded !== 'object' || !decoded) throw new Error('Token inválido');
      return {
        user: { id: (decoded as jwt.JwtPayload)['userId'] },
        client: { id: (decoded as jwt.JwtPayload)['clientId'] },
      };
    } catch (error) {
      return null;
    }
  },

  verifyScope: async (token: any, scope: string): Promise<boolean> => {
    if (!token.scope) return false;
    const tokenScopes = token.scope.split(' ');
    return tokenScopes.includes(scope);
  },
};
