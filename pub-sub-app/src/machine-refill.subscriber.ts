import { ISubscriber } from './interfaces/isubscriber';
import { Machine } from './machines/machine.schema';

export class MachineRefillSubscriber implements ISubscriber {
  private machines: Machine[];

  constructor(machines: Machine[]) {
    this.machines = machines;
  }

  handle(event: { machineId: string; quantity: number }): void {
    const machine = this.machines.find(
      (m: any) => m._id.toString() === event.machineId,
    );
    if (machine) {
      machine.stock += event.quantity;
      console.log(
        `Machine ${machine.name} refilled. New stock: ${machine.stock}`,
      );
    } else {
      console.error(`Machine with ID ${event.machineId} not found.`);
    }
  }
}
