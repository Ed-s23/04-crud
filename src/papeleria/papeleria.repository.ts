
//* Creacion de inlleccion de dependensias, Solid, separabilidad de reponsabilidades

import { Injectable } from "@nestjs/common";
import { Papeleria } from "./entities/papeleria.entity.js";
import { UpdatePapeleriaDto } from "./dto/update-papeleria.dto.js";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export  class PapeleriaRepository{
    //* Contructor para la BD 
    constructor(
        @InjectRepository(Papeleria)
        private readonly repo: Repository<Papeleria>
    ){}
    
   // private readonly papeleria = new Map<number,Papeleria>();
    //* Verificar que el id no exista en el bd

    async  idExiste(id:number):Promise<boolean>{
        const existe = await this.repo.countBy({id});
        return existe > 0 ;
    }
    // IdExist(id: number):boolean{
    //     //! Buscar como enlazar la bd 
    //     return this.papeleria.has(id) 
    // }
    // //* Buscar un elemento en espesifico por medio de su id 
    findById(id:number): Promise<Papeleria | null>{
        //! Averiguar como se busca por medio de la bd 
        return this.repo.findOneBy({id})
    }
    //* Almacenar el elemento, primero verificando no tener porblemas de Id usando IdExist
    save(guardar: Partial<Papeleria>): Promise<Papeleria> {
        //! Averigar como inyectar en la bd 
        return this.repo.save(guardar);
    }
    //* Mostrar todos los elementos de la Bd en un formato en espesifico

    findAll():Promise<Papeleria[]>{
        //! Averiguar como se busca y muestran los elementos de una bd
        return this.repo.find()
    }
    //* Eliminar un elemento de la Bd usando el ID 
    async delete(id:number):Promise <boolean> {
        const eliminar = await this.repo.delete(id);
        //this.papeleria.delete(id);
        return(eliminar.affected ?? 0)>0
    }
    //* Actualizar un producto por medio de un id 
    async update(id:number, actualizar: UpdatePapeleriaDto ):Promise <Papeleria | null>{
        const producto = await this.findById(id);
        if (!producto) return null;
        return this.repo.save({
            ... producto, 
            ... actualizar
        })


        // const papeProduct = this.papeleria.get(id)
        // if (!papeProduct) return undefined

        // const update =  {
        //     ...papeProduct, 
        //     ... actualizar,
        //     id
        // }
        // this.papeleria.set(id, update);
        // return update;

    }

    
}