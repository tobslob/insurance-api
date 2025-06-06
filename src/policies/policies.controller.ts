import { Request, Response } from 'express';
import { PoliciesService } from './policies.service';

export class PoliciesController {
  constructor(private readonly service: PoliciesService) {}

  getById = (req: Request, res: Response) => {
    try {
      const policy = this.service.findById(req.params.id);
      res.json(policy);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  };

  getAll = (req: Request, res: Response) => {
    const name = typeof req.query.customerName === 'string' ? req.query.customerName : '';
    const policies = this.service.findByCustomerName(name);
    res.json(policies);
  };

  create = (req: Request, res: Response) => {
    const policy = this.service.create(req.body);
    res.status(201).json(policy);
  };

  update = (req: Request, res: Response) => {
    try {
      const updated = this.service.update(req.params.id, req.body);
      res.json(updated);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  };

  delete = (req: Request, res: Response) => {
    try {
      const deleted = this.service.delete(req.params.id);
      res.json(deleted);
    } catch (err: any) {
      res.status(404).json({ message: err.message });
    }
  };
}
