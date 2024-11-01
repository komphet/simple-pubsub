import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MachinesService } from './machines.service';
import { MachinesController } from './machines.controller';
import { Machine, MachineSchema } from './machine.schema';
import { PublishSubscribeModule } from 'src/publish-subscribe.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }]),
    PublishSubscribeModule,
  ],
  providers: [MachinesService],
  controllers: [MachinesController],
  exports: [MachinesService],
})
export class MachinesModule {}
