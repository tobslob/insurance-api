import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { PoliciesService } from './policies.service';
import { CreatePolicyDto } from './dto/createPolicy.dto';
import { UpdatePolicyDto } from './dto/updatePolicy.dto';

@Controller('policies')
export class PoliciesController {
  constructor(private readonly policiesService: PoliciesService) {}

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.policiesService.findById(id);
  }

  @Get()
  getByCustomerName(@Query('customerName') name: string) {
    return this.policiesService.findByCustomerName(name);
  }

  @Post()
  create(@Body() dto: CreatePolicyDto) {
    return this.policiesService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePolicyDto) {
    return this.policiesService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.policiesService.delete(id);
  }
}
