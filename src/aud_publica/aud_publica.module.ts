import { Module } from '@nestjs/common';
import { AudPublicaController } from './aud_publica.controller';
import { AudPublicaService } from './aud_publica.service';

@Module({
  controllers: [AudPublicaController],
  providers: [AudPublicaService]
})
export class AudPublicaModule {}
