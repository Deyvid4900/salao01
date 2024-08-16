import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('/')
  create(@Body() CreateClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clienteService.create(CreateClienteDto);
  }

  @Get('/')
  readAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }
  @Get('/:id')
  readOne(@Param('id') id: number): Promise<Cliente> {
    return this.clienteService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: number,
    @Body() UpdateClienteDto: CreateClienteDto,
  ): Promise<Cliente> {
    return this.clienteService.update(id, UpdateClienteDto);
  }

  @Delete('/:id')
  delete(@Param('id') id:number): Promise<void>{
    return this.clienteService.remove(id);
  }
}
