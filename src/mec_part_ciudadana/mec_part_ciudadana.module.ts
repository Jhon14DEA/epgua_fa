import { Module } from '@nestjs/common';
import { MecPartCiudadanaController } from './mec_part_ciudadana.controller';
import { MecPartCiudadanaService } from './mec_part_ciudadana.service';

@Module({
  controllers: [MecPartCiudadanaController],
  providers: [MecPartCiudadanaService]
})
export class MecPartCiudadanaModule {}
