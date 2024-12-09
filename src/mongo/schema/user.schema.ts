import { BaseDocument } from '../base/base.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, toJSON: { virtuals: true }   })
export class User extends BaseDocument {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('companies', {
  ref: 'Company',
  localField: '_id',
  foreignField: 'userId',
});
