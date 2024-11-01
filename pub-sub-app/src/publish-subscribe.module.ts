import { Module } from '@nestjs/common';
import { PublishSubscribeService } from './publish-subscribe.service';

@Module({
  providers: [PublishSubscribeService],
  exports: [PublishSubscribeService],
})
export class PublishSubscribeModule {}
