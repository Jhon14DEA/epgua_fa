import { Module } from '@nestjs/common';
import { DifunsionMecanismoController } from './difunsion_mecanismo.controller';
import { DifunsionMecanismoService } from './difunsion_mecanismo.service';

@Module({
  controllers: [DifunsionMecanismoController],
  providers: [DifunsionMecanismoService]
})
export class DifunsionMecanismoModule {}
