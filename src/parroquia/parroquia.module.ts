import { Module } from '@nestjs/common';
import { ParroquiaController } from './parroquia.controller';
import { ParroquiaService } from './parroquia.service';

@Module({
  controllers: [ParroquiaController],
  providers: [ParroquiaService]
})
export class ParroquiaModule {}
