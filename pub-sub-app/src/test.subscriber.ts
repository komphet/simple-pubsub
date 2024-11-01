import { ISubscriber } from './interfaces/isubscriber';

export class TestSubscriber implements ISubscriber {
  handle(event: any): void {
    console.log('Received event:', event);
  }
}
