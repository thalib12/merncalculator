import { Controller, Get, Post, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculateExpressionDto } from './dto/calculate.expression.dto';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post()
  create(@Body() expressionDto: CalculateExpressionDto) {
    return this.calculatorService.create(expressionDto);
  }

  @Get('get-all-calculations')
  findAll() {
    return this.calculatorService.findAll();
  }
}
