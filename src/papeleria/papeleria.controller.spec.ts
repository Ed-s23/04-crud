import { Test, TestingModule } from '@nestjs/testing';
import { PapeleriaController } from './papeleria.controller.js';
import { PapeleriaService } from './papeleria.service.js';

describe('PapeleriaController', () => {
  let controller: PapeleriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PapeleriaController],
      providers: [PapeleriaService],
    }).compile();

    controller = module.get<PapeleriaController>(PapeleriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
