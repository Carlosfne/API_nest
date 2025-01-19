import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCulturaDto {
  @ApiProperty({
    example: 'Soja',
    description: 'Nome da cultura',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    example: 'Safra 2023/2024',
    description: 'Identificação da safra',
  })
  @IsString()
  @IsNotEmpty()
  safra: string;

  @ApiProperty({
    example: '2023-10-01',
    description: 'Data do plantio',
  })
  @IsDate()
  @Type(() => Date)
  dataPlantio: Date;

  @ApiProperty({
    example: '2024-03-15',
    description: 'Data prevista da colheita',
  })
  @IsDate()
  @Type(() => Date)
  dataColheita: Date;

  @ApiProperty({
    example: 1,
    description: 'ID da propriedade onde a cultura será plantada',
  })
  @IsNumber()
  @IsNotEmpty()
  propriedadeId: number;
}
