import { Module } from '@nestjs/common';
import { PapeleriaService } from './papeleria.service.js';
import { PapeleriaController } from './papeleria.controller.js';
import { PapeleriaRepository } from './papeleria.repository.js';
import { IdsGenerators } from './Utils/IdsGenerators.js';
import { Papeleria } from './entities/papeleria.entity.js'; 
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Papeleria])],
  controllers: [PapeleriaController],
  providers: [PapeleriaService, PapeleriaRepository, IdsGenerators],
})
export class PapeleriaModule {}
