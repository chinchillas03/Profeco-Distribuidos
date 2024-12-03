
import { rabbitMQ } from 'shared/rabbitmq'; 


export async function consumeAuthEvents() {
  
    await rabbitMQ.connect();
    console.log('Conectado a RabbitMQ');

    await rabbitMQ.consume('auth_events', (message) => {

    console.log('Evento recibido de RabbitMQ:', message);

    if (message.event === 'user_logged_in') {
 
      console.log(`Usuario ${message.userId} ha iniciado sesión a las ${message.timestamp}`);

    }
  });
}

consumeAuthEvents().catch((error) => {
  console.error('Error al consumir los mensajes de RabbitMQ:', error);
});
