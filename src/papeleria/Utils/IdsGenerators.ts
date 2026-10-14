import { Injectable } from "@nestjs/common";
//* Generador automatico de ids para cada producto, Solid, 
@Injectable()
export class IdsGenerators{
    private next = 1;
    generate(isToken:  (id:number)=> boolean){
        while(isToken(this.next)) this.next++;
        return this.next ++;
    }
}