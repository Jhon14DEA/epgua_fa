import { Module } from '@nestjs/common';
import { ComparecienteController } from './compareciente.controller';
import { ComparecienteService } from './compareciente.service';

@Module({
  controllers: [ComparecienteController],
  providers: [ComparecienteService]
})
export class ComparecienteModule {}
