import { Module } from '@nestjs/common';
import { PapeleriaService } from './papeleria.service.js';
import { PapeleriaController } from './papeleria.controller.js';
import { PapeleriaRepository } from './papeleria.repository.js';
import { IdsGenerators } from './Utils/IdsGenerators.js';
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

    })
  ],

  controllers: [PapeleriaController],
  providers: [PapeleriaService, PapeleriaRepository, IdsGenerators],
})
export class PapeleriaModule {}
