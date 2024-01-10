import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalculatorService } from './calculator.service';
import { ExpressionModelDefinition } from './entities/expression.model';
import { CalculatorController } from './calculator.controller';

@Module({
  imports: [MongooseModule.forFeature([ExpressionModelDefinition])],
  controllers: [CalculatorController],
  providers: [CalculatorService],
})
export class CalculatorModule {}
