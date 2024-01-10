import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

export type ExpressionDocument = Document<Expression>;

export type ExpressionModel = Model<Expression>;

@Schema()
export class Expression extends Document {
  @Prop({ required: true })
  expression: string;
}

export const ExpressionSchema =
  SchemaFactory.createForClass<Expression>(Expression);

export const ExpressionModelDefinition: ModelDefinition = {
  name: Expression.name,
  schema: ExpressionSchema,
  collection: 'expression',
};
