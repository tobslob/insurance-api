import { z } from 'zod';

export const PolicySchema = z.object({
  id: z.string(),
  productId: z.string(),
  customerName: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  premium: z.number(),
  status: z.string(),
  createdAt: z.string(),
});

export const PolicyUpdateSchema = PolicySchema.partial();

export type PolicyInput = z.infer<typeof PolicySchema>;
export type PolicyUpdateInput = z.infer<typeof PolicyUpdateSchema>;
