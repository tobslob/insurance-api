import { Request, Response } from 'express';
import { PoliciesService } from './policies.service';
import { CreatePolicyDto } from '../type/createPolicy.dto';
import { UpdatePolicyDto } from '../type/updatePolicy.dto';

export class PoliciesController {
  constructor(private readonly service: PoliciesService) {}

  getById = (req: Request, res: Response) => {
    try {
      const policy = this.service.findById(req.params.id);
      res.json(policy);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      res.status(404).json({ message });
    }
  };

  getAll = (req: Request, res: Response) => {
    const name =
      typeof req.query.customerName === 'string' ? req.query.customerName : '';
    const policies = this.service.findByCustomerName(name);
    res.json(policies);
  };

  create = (req: Request, res: Response) => {
    const policy = this.service.create(req.body as CreatePolicyDto);
    res.status(201).json(policy);
  };

  update = (req: Request, res: Response) => {
    try {
      const updated = this.service.update(
        req.params.id,
        req.body as UpdatePolicyDto,
      );
      res.json(updated);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      res.status(404).json({ message });
    }
  };

  delete = (req: Request, res: Response) => {
    try {
      const deleted = this.service.delete(req.params.id);
      res.json(deleted);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      res.status(404).json({ message });
    }
  };
}
