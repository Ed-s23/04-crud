import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PapeleriaModule } from './papeleria/papeleria.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT ?? '5432') ,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'contraseña',
        database: process.env.DB_NAME || 'nest_bd',
        autoLoadEntities : true,
        synchronize: true,
  
      }),
      PapeleriaModule
    ],

//  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
