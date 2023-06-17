import { Module } from '@nestjs/common';
import { CentroInfPublicaController } from './centro_inf_publica.controller';
import { CentroInfPublicaService } from './centro_inf_publica.service';

@Module({
  controllers: [CentroInfPublicaController],
  providers: [CentroInfPublicaService]
})
export class CentroInfPublicaModule {}
