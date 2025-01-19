import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Propriedade } from './propriedade.entity';
import { CreatePropriedadeDto, UpdatePropriedadeDto } from './dto';
import { ProdutorService } from '../produtor/produtor.service';
import { CustomLogger } from '../../infrastructure/logger/logger.service';

@Injectable()
export class PropriedadeService {
  constructor(
    @InjectRepository(Propriedade)
    private readonly propriedadeRepository: Repository<Propriedade>,
    private produtorService: ProdutorService,
    private readonly logger: CustomLogger,
  ) {}

  async create(
    createPropriedadeDto: CreatePropriedadeDto,
  ): Promise<Propriedade> {
    try {
      this.logger.log(
        `Criando propriedade com dados: ${JSON.stringify(createPropriedadeDto)}`,
      );

      const { areaTotal, areaAgricultavel, areaVegetacao, produtorId } =
        createPropriedadeDto;

      await this.produtorService.findOne(produtorId);

      if (areaAgricultavel + areaVegetacao > areaTotal) {
        throw new BadRequestException(
          'A soma das áreas agricultável e de vegetação não pode ultrapassar a área total.',
        );
      }

      if (areaTotal <= 0) {
        throw new BadRequestException('A área total deve ser maior que zero.');
      }

      if (!createPropriedadeDto.cidade || !createPropriedadeDto.estado) {
        throw new BadRequestException(
          'Cidade e estado são campos obrigatórios',
        );
      }

      const propriedade =
        this.propriedadeRepository.create(createPropriedadeDto);
      return await this.propriedadeRepository.save(propriedade);
    } catch (error) {
      this.logger.error(
        `Erro ao criar propriedade: ${error.message}`,
        error.stack,
      );
      throw error;
    }
  }

  async findAll(): Promise<Propriedade[]> {
    return await this.propriedadeRepository.find({
      relations: ['produtor', 'culturas'],
    });
  }

  async findOne(id: number): Promise<Propriedade> {
    const propriedade = await this.propriedadeRepository.findOne({
      where: { id },
      relations: ['produtor', 'culturas'],
    });
    if (!propriedade) {
      throw new NotFoundException(`Propriedade com ID ${id} não encontrada`);
    }
    return propriedade;
  }

  async update(
    id: number,
    updatePropriedadeDto: UpdatePropriedadeDto,
  ): Promise<Propriedade> {
    const { areaTotal, areaAgricultavel, areaVegetacao } = updatePropriedadeDto;

    if (areaAgricultavel + areaVegetacao > areaTotal) {
      throw new BadRequestException(
        'A soma das áreas agricultável e de vegetação não pode ultrapassar a área total.',
      );
    }

    const propriedade = await this.findOne(id);
    Object.assign(propriedade, updatePropriedadeDto);
    return this.propriedadeRepository.save(propriedade);
  }

  async remove(id: number): Promise<void> {
    const result = await this.propriedadeRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Propriedade com ID ${id} não encontrada`);
    }
  }
}
