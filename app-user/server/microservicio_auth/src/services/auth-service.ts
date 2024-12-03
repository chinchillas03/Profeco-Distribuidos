import OAuth2Server from 'oauth2-server';
import { oauthModel } from '../model/oauth-model';
import { rabbitMQ } from 'shared/rabbitmq';
import { Request, Response } from 'express';

export const authServer = new OAuth2Server({
  model: oauthModel,
  accessTokenLifetime: 3600, 
  refreshTokenLifetime: 7 * 24 * 3600,
});

export const authService = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      console.log('Petición de login recibida:', email, password);
      if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos.' });
      }

     
      req.body = {
        grant_type: 'password',
        client_id: 'raul',
        client_secret: 'raulsecreto',
        username: email, 
        password: password,
      };

      const request = new OAuth2Server.Request(req);
      const response = new OAuth2Server.Response(res);

      
      const token = await authServer.token(request, response);

      const message = {
        event: 'user_logged_in',
        userId: token.user.id,
        timestamp: new Date().toISOString(),
      };
      await rabbitMQ.publish('auth_events', message);
      console.log('Mensaje enviado a RabbitMQ:', message);

      res.status(200).json(token);
    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  },
};
