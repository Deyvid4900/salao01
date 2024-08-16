import { Module } from '@nestjs/common';
import { SalaoService } from './salao.service';
import { SalaoController } from './salao.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salao } from './entities/salao.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Salao])],
  controllers: [SalaoController],
  providers: [SalaoService],
})
export class SalaoModule {}
