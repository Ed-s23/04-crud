import { Module } from '@nestjs/common';
import { PapeleriaService } from './papeleria.service.js';
import { PapeleriaController } from './papeleria.controller.js';

@Module({
  controllers: [PapeleriaController],
  providers: [PapeleriaService],
})
export class PapeleriaModule {}
