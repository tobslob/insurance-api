import { Module } from '@nestjs/common';
import { PoliciesModule } from './policies/policies.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [PoliciesModule, ProductsModule],
})
export class AppModule {}
