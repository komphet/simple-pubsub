export interface ISubscriber {
  handle(event: any): void;
}
