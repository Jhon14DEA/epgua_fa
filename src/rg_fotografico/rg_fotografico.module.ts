import { Module } from '@nestjs/common';
import { RgFotograficoController } from './rg_fotografico.controller';
import { RgFotograficoService } from './rg_fotografico.service';

@Module({
  controllers: [RgFotograficoController],
  providers: [RgFotograficoService]
})
export class RgFotograficoModule {}
