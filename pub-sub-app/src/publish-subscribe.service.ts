import { Injectable } from '@nestjs/common';
import { IPublishSubscribeService } from './interfaces/ipublish-subscribe.service';
import { ISubscriber } from './interfaces/isubscriber';

@Injectable()
export class PublishSubscribeService implements IPublishSubscribeService {
  private subscribers: { [key: string]: ISubscriber[] } = {};

  subscribe(eventType: string, subscriber: ISubscriber): void {
    if (!this.subscribers[eventType]) {
      this.subscribers[eventType] = [];
    }
    this.subscribers[eventType].push(subscriber);
  }

  unsubscribe(eventType: string, subscriber: ISubscriber): void {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType] = this.subscribers[eventType].filter(
        (sub) => sub !== subscriber,
      );
    }
  }

  publish(eventType: string, event: any): void {
    if (this.subscribers[eventType]) {
      this.subscribers[eventType].forEach((subscriber) =>
        subscriber.handle(event),
      );
    }
  }
}
