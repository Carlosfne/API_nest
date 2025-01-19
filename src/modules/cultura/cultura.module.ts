import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CulturaController } from './cultura.controller';
import { CulturaService } from './cultura.service';
import { Cultura } from './entities/cultura.entity';
import { PropriedadeModule } from '../propriedades/propriedade.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cultura]), PropriedadeModule],
  controllers: [CulturaController],
  providers: [CulturaService],
  exports: [CulturaService],
})
export class CulturaModule {}
