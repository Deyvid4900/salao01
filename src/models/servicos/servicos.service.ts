import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Servico } from './entities/servico.entity';
import { Repository } from 'typeorm';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  async create(createServicoDto: CreateServicoDto): Promise<Servico> {
    const ServicoData = await this.servicosRepository.create(createServicoDto);
    return this.servicosRepository.save(ServicoData);
  }

  async update(
    id: number,
    UpdateServicoDto: UpdateServicoDto,
  ): Promise<Servico> {
    const existingServico = await this.findOne(id);
    const ServicoData = this.servicosRepository.merge(
      existingServico,
      UpdateServicoDto,
    );
    return await this.servicosRepository.save(ServicoData);
  }

  findAll(): Promise<Servico[]> {
    return this.servicosRepository.find();
  }

  findOne(id: number): Promise<Servico | null> {
    return this.servicosRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.servicosRepository.delete(id);
  }
}
