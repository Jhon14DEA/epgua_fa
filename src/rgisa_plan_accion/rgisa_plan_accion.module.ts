import { Module } from '@nestjs/common';
import { RgisaPlanAccionController } from './rgisa_plan_accion.controller';
import { RgisaPlanAccionService } from './rgisa_plan_accion.service';

@Module({
  controllers: [RgisaPlanAccionController],
  providers: [RgisaPlanAccionService]
})
export class RgisaPlanAccionModule {}
