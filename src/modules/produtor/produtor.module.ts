import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutorController } from './produtor.controller';
import { ProdutorService } from './produtor.service';
import { Produtor } from './entities/produtor.entity';
import { LoggerModule } from '../../infrastructure/logger/logger.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produtor]), LoggerModule],
  controllers: [ProdutorController],
  providers: [ProdutorService],
  exports: [ProdutorService],
})
export class ProdutorModule {}
