import { Injectable } from '@nestjs/common';
import { CreatePapeleriaDto } from './dto/create-papeleria.dto.js';
import { UpdatePapeleriaDto } from './dto/update-papeleria.dto.js';

@Injectable()
export class PapeleriaService {
  create(createPapeleriaDto: CreatePapeleriaDto) {
    return 'This action adds a new papeleria';
  }

  findAll() {
    return `This action returns all papeleria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} papeleria`;
  }

  update(id: number, updatePapeleriaDto: UpdatePapeleriaDto) {
    return `This action updates a #${id} papeleria`;
  }

  remove(id: number) {
    return `This action removes a #${id} papeleria`;
  }
}
