import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachinesModule } from './machines/machines.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/taobin'),
    MachinesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
