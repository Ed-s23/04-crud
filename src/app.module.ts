import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PapeleriaModule } from './papeleria/papeleria.module.js';

@Module({
  imports: [PapeleriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
