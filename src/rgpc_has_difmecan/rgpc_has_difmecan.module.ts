import { Module } from '@nestjs/common';
import { RgpcHasDifmecanController } from './rgpc_has_difmecan.controller';
import { RgpcHasDifmecanService } from './rgpc_has_difmecan.service';

@Module({
  controllers: [RgpcHasDifmecanController],
  providers: [RgpcHasDifmecanService]
})
export class RgpcHasDifmecanModule {}
