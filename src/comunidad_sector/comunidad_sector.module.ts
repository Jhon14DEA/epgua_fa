import { Module } from '@nestjs/common';
import { ComunidadSectorController } from './comunidad_sector.controller';
import { ComunidadSectorService } from './comunidad_sector.service';

@Module({
  controllers: [ComunidadSectorController],
  providers: [ComunidadSectorService]
})
export class ComunidadSectorModule {}
