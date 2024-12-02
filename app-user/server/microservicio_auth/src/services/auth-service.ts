import OAuth2Server from 'oauth2-server';
import { oauthModel } from '../model/oauth-model';
import { rabbitMQ } from 'shared/rabbitmq';
import { Request, Response } from 'express';

export const authServer = new OAuth2Server({
  model: oauthModel,
    accessTokenLifetime: 3600, // 1 hora
    refreshTokenLifetime: 7 * 24 * 3600, // 7 días
  });
  
export const authService = {
    async login(req: Request, res: Response) {
      const request = new OAuth2Server.Request(req);
      const response = new OAuth2Server.Response(res);
  
      try {
        // Intentamos generar el token de acceso
        
        const token = await authServer.token(request, response);
  
        // Publicamos un mensaje a RabbitMQ
        const message = {
          event: 'user_logged_in',
          userId: token.user.id,
          timestamp: new Date().toISOString(),
        };
        await rabbitMQ.publish('auth_events', message);
        console.log('Mensaje enviado a RabbitMQ:', message);
  
        // Adaptamos el res de OAuth2Server para manejar json
        res.status(200).json(token);
      } catch (error) {
        console.error('Error en login:', error);
      }
    }
  };
