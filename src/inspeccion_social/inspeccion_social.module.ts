import { Module } from '@nestjs/common';
import { InspeccionSocialController } from './inspeccion_social.controller';
import { InspeccionSocialService } from './inspeccion_social.service';

@Module({
  controllers: [InspeccionSocialController],
  providers: [InspeccionSocialService]
})
export class InspeccionSocialModule {}
