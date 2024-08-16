import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ColaboradorService } from './colaborador.service';
import { Colaborador } from './entities/colaborador.entity';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Controller('colaborador')
export class ColaboradorController {
  constructor(private readonly colaboradorService: ColaboradorService) {}


  @Post('/')
  create(@Body() createColaboradorDto: CreateColaboradorDto): Promise<Colaborador> {
    return this.colaboradorService.create(createColaboradorDto);
  }

  @Get('/')
  readAll(): Promise<Colaborador[]> {
    return this.colaboradorService.findAll();
  }

  @Get('/:id')
  readOne(@Param('id') id: number): Promise<Colaborador> {
    return this.colaboradorService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() UpdateColaboradorDto: CreateColaboradorDto,
  ): Promise<Colaborador> {
    return this.colaboradorService.update(id, UpdateColaboradorDto);
  }

  @Delete('/:id')
  delete(@Param('id') id:number): Promise<void>{
    return this.colaboradorService.remove(id);
  }
}
