import { Module } from '@nestjs/common';
import { PreguntaOpcionController } from './pregunta_opcion.controller';
import { PreguntaOpcionService } from './pregunta_opcion.service';

@Module({
  controllers: [PreguntaOpcionController],
  providers: [PreguntaOpcionService]
})
export class PreguntaOpcionModule {}
