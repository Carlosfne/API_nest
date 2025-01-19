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
import { ProdutorService } from './produtor.service';
import { CreateProdutorDto, UpdateProdutorDto } from './dto';
import { Produtor } from './entities/produtor.entity';

@ApiTags('produtores')
@Controller('produtor')
export class ProdutorController {
  constructor(private readonly produtorService: ProdutorService) {}

  @Post()
  @ApiOperation({ summary: 'Criar produtor' })
  @ApiResponse({ status: 201, description: 'Produtor criado com sucesso.' })
  create(@Body() createProdutorDto: CreateProdutorDto): Promise<Produtor> {
    return this.produtorService.create(createProdutorDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os produtores' })
  findAll(): Promise<Produtor[]> {
    return this.produtorService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um produtor pelo ID' })
  findOne(@Param('id') id: string): Promise<Produtor> {
    return this.produtorService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um produtor' })
  update(
    @Param('id') id: string,
    @Body() updateProdutorDto: UpdateProdutorDto,
  ) {
    return this.produtorService.update(+id, updateProdutorDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um produtor' })
  remove(@Param('id') id: string) {
    return this.produtorService.remove(+id);
  }
}
