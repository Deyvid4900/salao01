import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';
import { Repository } from 'typeorm';
import { CreateColaboradorDto } from './dto/create-colaborador.dto';
import { UpdateColaboradorDto } from './dto/update-colaborador.dto';

@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async create(createColaboradorDto: CreateColaboradorDto): Promise<Colaborador> {
    const ColaboradorData = await this.colaboradorRepository.create(createColaboradorDto);
    return this.colaboradorRepository.save(ColaboradorData);
  }

  async update(id: number, UpdateColaboradorDto: UpdateColaboradorDto): Promise<Colaborador> {
    const existingColaborador = await this.findOne(id);
    const ColaboradorData = this.colaboradorRepository.merge(existingColaborador, UpdateColaboradorDto);
    return await this.colaboradorRepository.save(ColaboradorData);
  }

  findAll(): Promise<Colaborador[]> {
    return this.colaboradorRepository.find();
  }

  findOne(id: number): Promise<Colaborador | null> {
    return this.colaboradorRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.colaboradorRepository.delete(id);
  }
}
