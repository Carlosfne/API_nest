import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProdutorDto {
  @ApiProperty({
    description: 'CPF ou CNPJ do produtor',
    example: '123.456.789-00',
    pattern:
      '(^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$)|(^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$)',
  })
  @IsNotEmpty()
  @Matches(
    /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/,
  )
  cpfCnpj: string;

  @ApiProperty({
    example: 'João da Silva',
    description: 'Nome completo do produtor',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;
}
