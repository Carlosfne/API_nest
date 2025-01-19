import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePropriedadeDto {
  @ApiProperty({
    example: 'Fazenda São João',
    description: 'Nome da propriedade',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'São Paulo',
    description: 'Cidade onde está localizada a propriedade',
  })
  @IsString()
  @IsNotEmpty()
  cidade: string;

  @ApiProperty({
    example: 'SP',
    description: 'Estado onde está localizada a propriedade',
  })
  @IsString()
  @IsNotEmpty()
  estado: string;

  @ApiProperty({
    example: 100,
    description: 'Área total da propriedade em hectares',
  })
  @IsNumber()
  @Min(0)
  areaTotal: number;

  @ApiProperty({
    example: 80,
    description: 'Área agricultável em hectares',
  })
  @IsNumber()
  @Min(0)
  areaAgricultavel: number;

  @ApiProperty({
    example: 20,
    description: 'Área de vegetação em hectares',
  })
  @IsNumber()
  @Min(0)
  areaVegetacao: number;

  @ApiProperty({
    example: 1,
    description: 'ID do produtor proprietário',
  })
  @IsNumber()
  @IsNotEmpty()
  produtorId: number;
}
