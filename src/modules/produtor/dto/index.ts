import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProdutorDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  cpfCnpj: string;
}

export class UpdateProdutorDto extends CreateProdutorDto {}
