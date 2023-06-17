import { Module } from '@nestjs/common';
import { ActaCompromisoController } from './acta_compromiso.controller';
import { ActaCompromisoService } from './acta_compromiso.service';

@Module({
  controllers: [ActaCompromisoController],
  providers: [ActaCompromisoService]
})
export class ActaCompromisoModule {}
