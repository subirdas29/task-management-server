import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import { Server as SocketIOServer } from 'socket.io';

let server: Server;
let io: SocketIOServer;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);


    server = app.listen(config.port, () => {
      console.log(`✅ App is listening on port ${config.port}`);
    });

   
    io = new SocketIOServer(server, {
      cors: {
        origin: '*', 
        methods: ['GET', 'POST'],
      },
    });

  
    io.on('connection', (socket) => {
      console.log('🟢 New client connected:', socket.id);

      socket.on('disconnect', () => {
        console.log('🔴 Client disconnected:', socket.id);
      });
    });

   
    app.set('io', io); 
  } catch (err) {
    console.error(err);
  }
}

main();


process.on('unhandledRejection', () => {
  console.log(`😈 unhandledRejection is detected, shutting down ...`);
  if (server) {
    server.close(() => process.exit(1));
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected, shutting down ...`);
  process.exit(1);
});
