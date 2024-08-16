import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Salao } from './entities/salao.entity';
import { Repository } from 'typeorm';
import { CreateSalaoDto } from './dto/create-salao.dto';
import { UpdateSalaoDto } from './dto/update-salao.dto';

@Injectable()
export class SalaoService {
constructor(
  @InjectRepository(Salao)
  private salaoRepository:Repository<Salao>,
){}

async create(createSalaoDto: CreateSalaoDto): Promise<Salao> {
  const salaoData = await this.salaoRepository.create(createSalaoDto);
  return this.salaoRepository.save(salaoData);
}

async update(
  id: number,
  UpdateSalaoDto: UpdateSalaoDto,
): Promise<Salao> {
  const existingSalao = await this.findOne(id);
  const salaoData = this.salaoRepository.merge(
    existingSalao,
    UpdateSalaoDto,
  );
  return await this.salaoRepository.save(salaoData);
}

  findAll():Promise<Salao[]>{
    return this.salaoRepository.find();
  }

  findOne(id:number):Promise<Salao|null>{
    return this.salaoRepository.findOneBy({id});
  }

  async remove(id:number):Promise<void>{
    await this.salaoRepository.delete(id);
  }
}
