import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropriedadeController } from './propriedade.controller';
import { PropriedadeService } from './propriedade.service';
import { Propriedade } from './propriedade.entity';
import { ProdutorModule } from '../produtor/produtor.module';
import { LoggerModule } from '../../infrastructure/logger/logger.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Propriedade]),
    ProdutorModule,
    LoggerModule,
  ],
  controllers: [PropriedadeController],
  providers: [PropriedadeService],
  exports: [PropriedadeService],
})
export class PropriedadeModule {}
