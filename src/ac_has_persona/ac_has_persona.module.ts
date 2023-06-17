import { Module } from '@nestjs/common';
import { AcHasPersonaController } from './ac_has_persona.controller';
import { AcHasPersonaService } from './ac_has_persona.service';

@Module({
  controllers: [AcHasPersonaController],
  providers: [AcHasPersonaService]
})
export class AcHasPersonaModule {}
