import server from './server'
import colors from 'colors'
import {rabbitMQ} from '../../shared/rabbitmq'

const port = process.env.PORT || 4007

// Conectamos RabbitMQ antes de iniciar el servidor
rabbitMQ.connect().then(() => {
    console.log('RabbitMQ conectado correctamente');
    // Aquí puedes empezar a escuchar a las rutas, etc.
  }).catch(error => {
    console.error('Error al conectar a RabbitMQ:', error);
  });
 
server.listen(port, () =>{
    console.log(colors.cyan.bold(`REST API funcionando en el puerto ${port}`))
})

