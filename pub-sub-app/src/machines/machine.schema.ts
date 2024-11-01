import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MachineDocument = Machine & Document;

@Schema()
export class Machine {
  @Prop()
  name: string;

  @Prop()
  stock: number;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);
