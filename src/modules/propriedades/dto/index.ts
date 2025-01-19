import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePropriedadeDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsNumber()
  @IsNotEmpty()
  areaTotal: number;

  @IsNumber()
  @IsNotEmpty()
  areaAgricultavel: number;

  @IsNumber()
  @IsNotEmpty()
  areaVegetacao: number;

  @IsNumber()
  @IsNotEmpty()
  produtorId: number;
}

export class UpdatePropriedadeDto extends CreatePropriedadeDto {}

export * from './create-propriedade.dto';
