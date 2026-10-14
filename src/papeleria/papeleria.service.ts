import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePapeleriaDto } from './dto/create-papeleria.dto.js';
import { UpdatePapeleriaDto } from './dto/update-papeleria.dto.js';
import { PapeleriaRepository } from './papeleria.repository.js';
import { IdsGenerators } from './Utils/IdsGenerators.js';
import { Papeleria } from './entities/papeleria.entity.js';

@Injectable()
export class PapeleriaService {
  papeleria:CreatePapeleriaDto[] = [];
  //* Inllecion de dependencias provenientes del papeleria.Reposotory
  constructor(
    private readonly repo:PapeleriaRepository,
    //private readonly ids: IdsGenerators
  ){}

  async create(createPapeleriaDto: CreatePapeleriaDto): Promise <Papeleria> {
    // const id = this.resolveId(createPapeleriaDto.id);
    // return this.repo.save({
    //   ...createPapeleriaDto,
    //   id
    // });
    let idFinal = createPapeleriaDto.id;

    if (idFinal) {
      const existe = await this.repo.idExiste(idFinal);
      if (existe) {
        throw new Error(`El ID ${idFinal} ya existe en la base de datos`);
      }
    } 
    // Si tu ID es autoincremental por la Base de Datos (Serial / Identity), 
    // puedes omitir el manejo manual del ID y dejar que Postgres lo genere solo.

    return this.repo.save(createPapeleriaDto);
    //return 'This action adds a new papeleria';
  }

//   resolveId (id?: number){
//   //* Si el id no se define o no se encuentra y lo regresara
//   if (id != undefined && !this.repo.IdExist(id)){
//     return id;
//   }
//   // *en caso de existir generara uno nuevo y que no exista  
//   return this.ids.generate((id)=> this.repo.IdExist(id))
// }

  async findAll(): Promise<Papeleria[]>{
   // return `This action returns all papeleria`;
    return await this.repo.findAll();
  }

  async findOne(id: number): Promise<Papeleria> {
    const producto = await this.repo.findById(id);
    if (!producto) {
      throw new NotFoundException(`Producto  con ID ${id} no encontrado`);
    }
    return producto;
   // return `This action returns a #${id} papeleria`;
  }

  async update(id: number, updatePapeleriaDto: UpdatePapeleriaDto): Promise<Papeleria> {
    const productoActualizado = await this.repo.update(id, updatePapeleriaDto);
    if (!productoActualizado) {
      throw new NotFoundException(`No se pudo actualizar: Producto con ID ${id} no encontrado`);
    }
    return productoActualizado;
    //return `This action updates a #${id} papeleria`;
  }

  async remove(id: number): Promise<{deleted: boolean}> {
     const eliminado = await this.repo.delete(id);
      if (!eliminado) {
        throw new NotFoundException(`No se pudo eliminar: Producto con ID ${id} no encontrado`);
      }
      return { deleted: true
      //return `This action removes a #${id} papeleria`;
    }
  }
}