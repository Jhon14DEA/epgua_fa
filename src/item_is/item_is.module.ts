import { Module } from '@nestjs/common';
import { ItemIsController } from './item_is.controller';
import { ItemIsService } from './item_is.service';

@Module({
  controllers: [ItemIsController],
  providers: [ItemIsService]
})
export class ItemIsModule {}
