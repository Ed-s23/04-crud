import { Injectable } from '@nestjs/common';
import { CreatePapeleriaDto } from './dto/create-papeleria.dto.js';
import { UpdatePapeleriaDto } from './dto/update-papeleria.dto.js';
import { PapeleriaRepository } from './papeleria.repository.js';
import { IdsGenerators } from './Utils/IdsGenerators.js';

@Injectable()
export class PapeleriaService {
  papeleria:CreatePapeleriaDto[] = [];
  //* Inllecion de dependencias provenientes del papeleria.Reposotory
  constructor(
    private readonly repo:PapeleriaRepository,
    //private readonly ids: IdsGenerators
  ){}

  create(createPapeleriaDto: CreatePapeleriaDto) {
    // const id = this.resolveId(createPapeleriaDto.id);
    // return this.repo.save({
    //   ...createPapeleriaDto,
    //   id
    // });

    //return 'This action adds a new papeleria';
  }

  resolveId (id?: number){
  //* Si el id no se define o no se encuentra y lo regresara
  if (id != undefined && !this.repo.IdExist(id)){
    return id;
  }
  // *en caso de existir generara uno nuevo y que no exista  
  return this.ids.generate((id)=> this.repo.IdExist(id))
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
