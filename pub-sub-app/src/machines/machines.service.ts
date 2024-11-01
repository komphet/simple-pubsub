import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Machine, MachineDocument } from './machine.schema';
import { PublishSubscribeService } from '../publish-subscribe.service';
import { LowStockWarningEvent, StockLevelOkEvent } from 'src/events';

@Injectable()
export class MachinesService {
  constructor(
    @InjectModel(Machine.name) private machineModel: Model<MachineDocument>,
    private readonly publishSubscribeService: PublishSubscribeService,
  ) {}

  async create(createMachineDto: any): Promise<Machine> {
    const machine = new this.machineModel(createMachineDto);
    return machine.save();
  }

  async findAll(): Promise<Machine[]> {
    return this.machineModel.find().exec();
  }

  async updateStock(id: string, stock: number): Promise<Machine> {
    const updatedMachine = await this.machineModel
      .findByIdAndUpdate(id, { stock }, { new: true })
      .exec();

    if (updatedMachine) {
      if (updatedMachine.stock < 3) {
        this.publishSubscribeService.publish(
          'LowStockWarning',
          new LowStockWarningEvent(updatedMachine._id),
        );
      } else {
        this.publishSubscribeService.publish(
          'StockLevelOk',
          new StockLevelOkEvent(updatedMachine._id),
        );
      }
    } else {
      throw new Error(`Machine with ID ${id} not found.`);
    }

    return updatedMachine;
  }

  async remove(id: string): Promise<Machine> {
    return this.machineModel.findByIdAndDelete(id).exec();
  }

  async findOne(id: string): Promise<Machine> {
    return this.machineModel.findById(id).exec();
  }
}
