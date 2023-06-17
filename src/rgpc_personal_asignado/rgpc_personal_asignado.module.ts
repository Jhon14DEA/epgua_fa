import { Module } from '@nestjs/common';
import { RgpcPersonalAsignadoController } from './rgpc_personal_asignado.controller';
import { RgpcPersonalAsignadoService } from './rgpc_personal_asignado.service';

@Module({
  controllers: [RgpcPersonalAsignadoController],
  providers: [RgpcPersonalAsignadoService]
})
export class RgpcPersonalAsignadoModule {}
