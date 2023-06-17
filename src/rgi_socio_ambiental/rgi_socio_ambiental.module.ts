import { Module } from '@nestjs/common';
import { RgiSocioAmbientalController } from './rgi_socio_ambiental.controller';
import { RgiSocioAmbientalService } from './rgi_socio_ambiental.service';

@Module({
  controllers: [RgiSocioAmbientalController],
  providers: [RgiSocioAmbientalService]
})
export class RgiSocioAmbientalModule {}
