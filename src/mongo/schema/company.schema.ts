import { Types } from 'mongoose';
import { BaseDocument } from '../base/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Company extends BaseDocument {
  @Prop({ type: Types.ObjectId,ref:"User" ,required: true })
  userId: Types.ObjectId;

  @Prop({ type: String, required: true })
  name: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
