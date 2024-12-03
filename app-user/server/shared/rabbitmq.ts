import amqp from 'amqplib';

class RabbitMQ {
  private static instance: RabbitMQ;
  private channel: amqp.Channel | null = null;
  private connection: amqp.Connection | null = null;

  private constructor() {}

  public static getInstance(): RabbitMQ {
    if (!RabbitMQ.instance) {
      RabbitMQ.instance = new RabbitMQ();
    }
    return RabbitMQ.instance;
  }

  public async connect(): Promise<void> {
    try {
      this.connection = await amqp.connect('amqp://localhost');
      this.channel = await this.connection.createChannel();
      console.log('RabbitMQ conectado exitosamente.');
    } catch (error) {
      console.error('Error conectando a RabbitMQ:', error);
      throw error;
    }
  }

  public async publish(queue: string, message: any): Promise<void> {
    if (!this.channel) {
      throw new Error('El canal RabbitMQ no está inicializado.');
    }

    await this.channel.assertQueue(queue, { durable: true });
    this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
    console.log(`Mensaje enviado a la cola "${queue}":`, message);
  }

  public async consume(queue: string, callback: (message: any) => void): Promise<void> {
    if (!this.channel) {
      throw new Error('El canal RabbitMQ no está inicializado.');
    }

    await this.channel.assertQueue(queue, { durable: true });
    this.channel.consume(queue, (msg: amqp.ConsumeMessage | null) => {
      if (msg) {
        const messageContent = JSON.parse(msg.content.toString());
        console.log(`Mensaje recibido de la cola "${queue}":`, messageContent);
        callback(messageContent);
        this.channel!.ack(msg);
      }
    });
  }
}

export const rabbitMQ = RabbitMQ.getInstance();
