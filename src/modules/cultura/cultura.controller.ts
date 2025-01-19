import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { CreateCulturaDto } from './dto/create-cultura.dto';
import { CulturaService } from './cultura.service';
import { Cultura } from './entities/cultura.entity';

@ApiTags('culturas')
@Controller('cultura')
export class CulturaController {
  constructor(private readonly culturaService: CulturaService) {}

  @Post()
  @ApiOperation({ summary: 'Criar cultura' })
  @ApiResponse({ status: 201, description: 'Cultura criada com sucesso.' })
  create(@Body() createCulturaDto: CreateCulturaDto): Promise<Cultura> {
    return this.culturaService.create(createCulturaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as culturas' })
  findAll(): Promise<Cultura[]> {
    return this.culturaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar uma cultura pelo ID' })
  findOne(@Param('id') id: string): Promise<Cultura> {
    return this.culturaService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar uma cultura' })
  update(@Param('id') id: string, @Body() updateCulturaDto: CreateCulturaDto) {
    return this.culturaService.update(+id, updateCulturaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma cultura' })
  remove(@Param('id') id: string) {
    return this.culturaService.remove(+id);
  }
}
