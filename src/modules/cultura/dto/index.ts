import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateCulturaDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsDate()
  @IsNotEmpty()
  safra: Date;

  @IsNotEmpty()
  propriedadeId: number;
}

export class UpdateCulturaDto extends CreateCulturaDto {}
