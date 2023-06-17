import { Module } from '@nestjs/common';
import { CriterioComunidadController } from './criterio_comunidad.controller';
import { CriterioComunidadService } from './criterio_comunidad.service';

@Module({
  controllers: [CriterioComunidadController],
  providers: [CriterioComunidadService]
})
export class CriterioComunidadModule {}
