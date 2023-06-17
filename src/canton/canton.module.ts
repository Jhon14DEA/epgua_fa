import { Module } from '@nestjs/common';
import { CantonController } from './canton.controller';
import { CantonService } from './canton.service';

@Module({
  controllers: [CantonController],
  providers: [CantonService]
})
export class CantonModule {}
