import { Policy } from './interfaces/policy.interface';
import { CreatePolicyDto } from './dto/createPolicy.dto';
import { UpdatePolicyDto } from './dto/updatePolicy.dto';
import policiesData from '../data/policies.json';
import { ProductsService } from '../products/products.service';

export class PoliciesService {
  private policies: Policy[] = policiesData;

  constructor(private readonly productsService: ProductsService) {}

  findById(id: string) {
    const policy = this.policies.find((p) => p.id === id);
    if (!policy) throw new Error('Policy not found');
    const product = this.productsService.findById(policy.productId);
    return { ...policy, product };
  }

  findByCustomerName(name: string) {
    return this.policies.filter((p) =>
      p.customerName.toLowerCase().includes(name.toLowerCase()),
    );
  }

  create(policyDto: CreatePolicyDto) {
    this.policies.push(policyDto);
    return policyDto;
  }

  update(id: string, updateDto: UpdatePolicyDto) {
    const index = this.policies.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Policy not found');
    this.policies[index] = { ...this.policies[index], ...updateDto };
    return this.policies[index];
  }

  delete(id: string) {
    const index = this.policies.findIndex((p) => p.id === id);
    if (index === -1) throw new Error('Policy not found');
    return this.policies.splice(index, 1)[0];
  }
}
