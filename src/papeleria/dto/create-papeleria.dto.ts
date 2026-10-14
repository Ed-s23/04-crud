import { IsInt, IsOptional, IsPositive, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePapeleriaDto {


    @IsString()
    @MaxLength(50)
    @MinLength(3)
    name:string;

    @IsInt()
    @IsPositive()
    price:number;

    @IsString()
    @MaxLength(100)
    @MinLength(3)
    description :string;

    @IsOptional()
    @IsInt()
    @IsPositive()
    id?:number;
    
}
