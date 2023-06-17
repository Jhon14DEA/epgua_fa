import { Module } from '@nestjs/common';
import { RgpcMecanismoPartciudController } from './rgpc_mecanismo_partciud.controller';
import { RgpcMecanismoPartciudService } from './rgpc_mecanismo_partciud.service';

@Module({
  controllers: [RgpcMecanismoPartciudController],
  providers: [RgpcMecanismoPartciudService]
})
export class RgpcMecanismoPartciudModule {}
