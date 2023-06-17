import { Module } from '@nestjs/common';
import { RgpcCriterioComunidadController } from './rgpc_criterio_comunidad.controller';
import { RgpcCriterioComunidadService } from './rgpc_criterio_comunidad.service';

@Module({
  controllers: [RgpcCriterioComunidadController],
  providers: [RgpcCriterioComunidadService]
})
export class RgpcCriterioComunidadModule {}
