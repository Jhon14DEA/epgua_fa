import { Module } from '@nestjs/common';
import { QuejaReclamoController } from './queja_reclamo.controller';
import { QuejaReclamoService } from './queja_reclamo.service';

@Module({
  controllers: [QuejaReclamoController],
  providers: [QuejaReclamoService]
})
export class QuejaReclamoModule {}
