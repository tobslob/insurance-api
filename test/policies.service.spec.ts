import { PoliciesService } from '../src/policies/policies.service';
import { ProductsService } from '../src/products/products.service';
import { Product } from '../src/type/product.interface';
import { Policy } from '../src/type/policy.interface';
import { CreatePolicyDto } from '../src/type/createPolicy.dto';

const mockProducts: Product[] = [
  {
    id: 'prodTest',
    name: 'Test Product',
    category: 'test',
    description: 'Test Desc',
    basePrice: 100,
    createdAt: new Date().toISOString(),
  },
];

const mockPolicies: Policy[] = [
  {
    id: 'polTest',
    productId: 'prodTest',
    customerName: 'Test User',
    startDate: '2025-01-01',
    endDate: '2026-01-01',
    premium: 110,
    status: 'active',
    createdAt: new Date().toISOString(),
  },
];

describe('PoliciesService', () => {
  let service: PoliciesService;

  beforeEach(() => {
    const productsService = {
      findById: (id: string) => mockProducts.find((p) => p.id === id),
    } as ProductsService;
    service = new PoliciesService(productsService);
    (service as any).policies = [...mockPolicies];
  });

  it('should return policy by id with full product', () => {
    const result = service.findById('polTest');
    expect(result).toHaveProperty('id', 'polTest');
    expect(result).toHaveProperty('product');
    expect(result.product.id).toBe('prodTest');
  });

  it('should return policies by customer name', () => {
    const results = service.findByCustomerName('Test');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].customerName).toContain('Test');
  });

  it('should create a new policy', () => {
    const newPolicy: CreatePolicyDto = {
      id: 'pol_new',
      productId: 'prodTest',
      customerName: 'New User',
      startDate: '2025-01-01',
      endDate: '2026-01-01',
      premium: 120,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    const result = service.create(newPolicy);
    expect(result).toEqual(newPolicy);
  });

  it('should update an existing policy', () => {
    const updated = service.update('polTest', { premium: 150 });
    expect(updated.premium).toBe(150);
  });

  it('should delete a policy', () => {
    const deleted = service.delete('polTest');
    expect(deleted.id).toBe('polTest');
  });
});
