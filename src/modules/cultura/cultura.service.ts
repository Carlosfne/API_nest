import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cultura } from './entities/cultura.entity';
import { CreateCulturaDto } from './dto/create-cultura.dto';
import { PropriedadeService } from '../propriedades/propriedade.service';

@Injectable()
export class CulturaService {
  constructor(
    @InjectRepository(Cultura)
    private culturaRepository: Repository<Cultura>,
    private propriedadeService: PropriedadeService,
  ) {}

  async create(createCulturaDto: CreateCulturaDto): Promise<Cultura> {
    const { propriedadeId, dataPlantio, dataColheita } = createCulturaDto;

    await this.propriedadeService.findOne(propriedadeId);

    if (new Date(dataColheita) <= new Date(dataPlantio)) {
      throw new BadRequestException(
        'A data de colheita deve ser posterior à data de plantio',
      );
    }

    const cultura = this.culturaRepository.create(createCulturaDto);
    return await this.culturaRepository.save(cultura);
  }

  async findAll(): Promise<Cultura[]> {
    return await this.culturaRepository.find({
      relations: ['propriedade'],
    });
  }

  async findOne(id: number): Promise<Cultura> {
    const cultura = await this.culturaRepository.findOne({
      where: { id },
      relations: ['propriedade'],
    });
    if (!cultura) {
      throw new NotFoundException(`Cultura com ID ${id} não encontrada`);
    }
    return cultura;
  }

  async update(
    id: number,
    updateCulturaDto: CreateCulturaDto,
  ): Promise<Cultura> {
    const cultura = await this.findOne(id);
    Object.assign(cultura, updateCulturaDto);
    return await this.culturaRepository.save(cultura);
  }

  async remove(id: number): Promise<void> {
    const result = await this.culturaRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cultura com ID ${id} não encontrada`);
    }
  }
}
