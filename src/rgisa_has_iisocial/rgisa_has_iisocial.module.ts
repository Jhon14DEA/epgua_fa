import { Module } from '@nestjs/common';
import { RgisaHasIisocialController } from './rgisa_has_iisocial.controller';
import { RgisaHasIisocialService } from './rgisa_has_iisocial.service';

@Module({
  controllers: [RgisaHasIisocialController],
  providers: [RgisaHasIisocialService]
})
export class RgisaHasIisocialModule {}
