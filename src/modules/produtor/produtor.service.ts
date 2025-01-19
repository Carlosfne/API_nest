import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produtor } from './entities/produtor.entity';
import { cpf, cnpj } from 'cpf-cnpj-validator';
import { CreateProdutorDto, UpdateProdutorDto } from './dto';
import { CustomLogger } from '../../infrastructure/logger/logger.service';

@Injectable()
export class ProdutorService {
  constructor(
    @InjectRepository(Produtor)
    private readonly produtorRepository: Repository<Produtor>,
    private readonly logger: CustomLogger,
  ) {}

  async create(createProdutorDto: CreateProdutorDto): Promise<Produtor> {
    try {
      const { cpfCnpj } = createProdutorDto;

      if (!cpf.isValid(cpfCnpj) && !cnpj.isValid(cpfCnpj)) {
        throw new BadRequestException('CPF ou CNPJ inválido');
      }

      const produtor = this.produtorRepository.create(createProdutorDto);
      return await this.produtorRepository.save(produtor);
    } catch (error) {
      this.logger.error(
        `Erro ao criar produtor: ${error.message}`,
        'ProdutorService',
      );
      throw error;
    }
  }

  async findAll(): Promise<Produtor[]> {
    return await this.produtorRepository.find({
      relations: ['propriedades'],
    });
  }

  async findOne(id: number): Promise<Produtor> {
    const produtor = await this.produtorRepository.findOne({
      where: { id },
      relations: ['propriedades'],
    });
    if (!produtor) {
      throw new NotFoundException(`Produtor com ID ${id} não encontrado`);
    }
    return produtor;
  }

  async update(
    id: number,
    updateProdutorDto: UpdateProdutorDto,
  ): Promise<Produtor> {
    const produtor = await this.findOne(id);
    Object.assign(produtor, updateProdutorDto);
    return await this.produtorRepository.save(produtor);
  }

  async remove(id: number): Promise<void> {
    const result = await this.produtorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produtor com ID ${id} não encontrado`);
    }
  }
}
