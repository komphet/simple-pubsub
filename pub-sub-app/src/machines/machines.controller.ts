import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { MachinesService } from './machines.service';
import { Machine } from './machine.schema';

@Controller('machines')
export class MachinesController {
  constructor(private readonly machinesService: MachinesService) {}

  @Post()
  async create(@Body() machine: Machine) {
    return this.machinesService.create(machine);
  }

  @Get()
  async findAll() {
    return this.machinesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.machinesService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.machinesService.remove(id);
  }

  @Patch(':id/stock')
  async updateStock(
    @Param('id') id: string,
    @Body() updateStockDto: { stock: number },
  ) {
    return this.machinesService.updateStock(id, updateStockDto.stock);
  }
}
