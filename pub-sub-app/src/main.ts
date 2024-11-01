import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TestSubscriber } from './test.subscriber';
import { PublishSubscribeService } from './publish-subscribe.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const publishSubscribeService = app.get(PublishSubscribeService);
  const testSubscriber = new TestSubscriber();

  publishSubscribeService.subscribe('LowStockWarning', testSubscriber);
  publishSubscribeService.subscribe('StockLevelOk', testSubscriber);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
