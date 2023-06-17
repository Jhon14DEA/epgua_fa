import { Module } from '@nestjs/common';
import { RgpcBeneficiarioController } from './rgpc_beneficiario.controller';
import { RgpcBeneficiarioService } from './rgpc_beneficiario.service';

@Module({
  controllers: [RgpcBeneficiarioController],
  providers: [RgpcBeneficiarioService]
})
export class RgpcBeneficiarioModule {}
