import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ServicosService } from './servicos.service';
import { Servico } from './entities/servico.entity';
import { CreateServicoDto } from './dto/create-servico.dto';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicoService: ServicosService) {}

  @Post('/')
  create(@Body() createServicoDto: CreateServicoDto): Promise<Servico> {
    return this.servicoService.create(createServicoDto);
  }

  @Get('/')
  readAll(): Promise<Servico[]> {
    return this.servicoService.findAll();
  }

  @Get('/:id')
  readOne(@Param('id') id: number): Promise<Servico> {
    return this.servicoService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() UpdateServicoDto: CreateServicoDto,
  ): Promise<Servico> {
    return this.servicoService.update(id, UpdateServicoDto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): Promise<void> {
    return this.servicoService.remove(id);
  }
}
