import { Module } from '@nestjs/common';
import { PlanAccionController } from './plan_accion.controller';
import { PlanAccionService } from './plan_accion.service';

@Module({
  controllers: [PlanAccionController],
  providers: [PlanAccionService]
})
export class PlanAccionModule {}
