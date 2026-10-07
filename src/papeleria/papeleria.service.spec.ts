import { Test, TestingModule } from '@nestjs/testing';
import { PapeleriaService } from './papeleria.service.js';

describe('PapeleriaService', () => {
  let service: PapeleriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PapeleriaService],
    }).compile();

    service = module.get<PapeleriaService>(PapeleriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
