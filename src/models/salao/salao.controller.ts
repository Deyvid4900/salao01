import { Salao } from 'src/models/salao/entities/salao.entity';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalaoService } from './salao.service';
import { CreateSalaoDto } from './dto/create-salao.dto';

@Controller('salao')
export class SalaoController {
  constructor(private readonly salaoService: SalaoService) {}

  @Post('/')
  create(@Body() createSalaoDto: CreateSalaoDto): Promise<Salao> {
    return this.salaoService.create(createSalaoDto);
  }

  @Get('/')
  readAll(): Promise<Salao[]> {
    return this.salaoService.findAll();
  }

  @Get('/:id')
  readOne(@Param('id') id: number): Promise<Salao> {
    return this.salaoService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() UpdateSalaoDto: CreateSalaoDto,
  ): Promise<Salao> {
    return this.salaoService.update(id, UpdateSalaoDto);
  }

  @Delete('/:id')
  delete(@Param('id') id:number): Promise<void>{
    return this.salaoService.remove(id);
  }
}
