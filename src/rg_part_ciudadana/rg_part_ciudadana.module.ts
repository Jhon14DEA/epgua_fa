import { Module } from '@nestjs/common';
import { RgPartCiudadanaController } from './rg_part_ciudadana.controller';
import { RgPartCiudadanaService } from './rg_part_ciudadana.service';

@Module({
  controllers: [RgPartCiudadanaController],
  providers: [RgPartCiudadanaService]
})
export class RgPartCiudadanaModule {}
