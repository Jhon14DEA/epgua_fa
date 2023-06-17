import { Module } from '@nestjs/common';
import { EncuestaPreguntaController } from './encuesta_pregunta.controller';
import { EncuestaPreguntaService } from './encuesta_pregunta.service';

@Module({
  controllers: [EncuestaPreguntaController],
  providers: [EncuestaPreguntaService]
})
export class EncuestaPreguntaModule {}
