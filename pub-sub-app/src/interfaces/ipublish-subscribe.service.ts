import { ISubscriber } from './isubscriber';

export interface IPublishSubscribeService {
  subscribe(eventType: string, subscriber: ISubscriber): void;
  unsubscribe(eventType: string, subscriber: ISubscriber): void;
  publish(eventType: string, event: any): void;
}
