import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { UsersModule } from './modules/users/users.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { PropriedadeModule } from './modules/propriedades/propriedade.module';
import { ProdutorModule } from './modules/produtor/produtor.module';
import { CulturaModule } from './modules/cultura/cultura.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeOrmConfig,
    }),
    LoggerModule,
    UsersModule,
    PropriedadeModule,
    ProdutorModule,
    CulturaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
