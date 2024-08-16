import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cliente } from './models/cliente/entities/cliente.entity';
import { Colaborador } from './models/colaborador/entities/colaborador.entity';
import { Servico } from './models/servicos/entities/servico.entity';
import { Salao } from './models/salao/entities/salao.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './models/cliente/cliente.module';
import { SalaoModule } from './models/salao/salao.module';
import { ServicosModule } from './models/servicos/servicos.module';
import { ColaboradorModule } from './models/colaborador/colaborador.module';
import { HorarioModule } from './models/horario/horario.module';
import { AgendamentoModule } from './models/agendamento/agendamento.module';
import { ArquivoModule } from './models/arquivo/arquivo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'salao',
      entities: [Cliente, Colaborador, Servico, Salao],
      synchronize: false,
    }),
    ClienteModule,SalaoModule,ServicosModule,ColaboradorModule, HorarioModule, AgendamentoModule, ArquivoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
