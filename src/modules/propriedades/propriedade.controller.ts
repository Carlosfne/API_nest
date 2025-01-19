import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreatePropriedadeDto, UpdatePropriedadeDto } from './dto';
import { PropriedadeService } from './propriedade.service';
import { Propriedade } from './propriedade.entity';

@ApiTags('propriedades')
@Controller('propriedade')
export class PropriedadeController {
  constructor(private readonly propriedadeService: PropriedadeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar propriedade' })
  @ApiResponse({ status: 201, description: 'Propriedade criada com sucesso.' })
  create(
    @Body() createPropriedadeDto: CreatePropriedadeDto,
  ): Promise<Propriedade> {
    return this.propriedadeService.create(createPropriedadeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as propriedades' })
  findAll(): Promise<Propriedade[]> {
    return this.propriedadeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma propriedade pelo ID' })
  findOne(@Param('id') id: string): Promise<Propriedade> {
    return this.propriedadeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma propriedade' })
  update(
    @Param('id') id: string,
    @Body() updatePropriedadeDto: UpdatePropriedadeDto,
  ) {
    return this.propriedadeService.update(+id, updatePropriedadeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma propriedade' })
  remove(@Param('id') id: string) {
    return this.propriedadeService.remove(+id);
  }
}
