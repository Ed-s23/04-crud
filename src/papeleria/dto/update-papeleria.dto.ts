import { PartialType } from '@nestjs/mapped-types';
import { CreatePapeleriaDto } from './create-papeleria.dto.js';

export class UpdatePapeleriaDto extends PartialType(CreatePapeleriaDto) {
    id? : number;
    name?: string;
    price?: number;
    description?: string;   
}
