import { UpdateClienteDto } from './dto/update-cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async create(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const clienteData = await this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(clienteData);
  }

  async update(
    id: number,
    UpdateClienteDto: UpdateClienteDto,
  ): Promise<Cliente> {
    const existingCliente = await this.findOne(id);
    const clienteData = this.clienteRepository.merge(
      existingCliente,
      UpdateClienteDto,
    );
    return await this.clienteRepository.save(clienteData);
  }

  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  findOne(id: number): Promise<Cliente | null> {
    return this.clienteRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.clienteRepository.delete(id);
  }
}
