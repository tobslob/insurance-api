import { Module } from '@nestjs/common';
import { PoliciesController } from './policies.controller';
import { PoliciesService } from './policies.service';
import { ProductsModule } from '../products/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [PoliciesController],
  providers: [PoliciesService],
})
export class PoliciesModule {}
