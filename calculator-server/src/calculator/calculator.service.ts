import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CalculateExpressionDto } from './dto/calculate.expression.dto';
import { Expression, ExpressionModel } from './entities/expression.model';

@Injectable()
export class CalculatorService {
  constructor(
    @InjectModel(Expression.name)
    private readonly expression: ExpressionModel,
  ) {}

  create(createExpressionDto: CalculateExpressionDto) {
    const answer = eval(createExpressionDto.expression);
    this.expression.create({
      expression: createExpressionDto.expression + '=' + answer,
    });
    return { answer };
  }

  findAll() {
    return this.expression.find({}, { _id: 0, __v: 0 });
  }
}
