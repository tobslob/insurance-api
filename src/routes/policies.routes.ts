import { Router } from 'express';
import { apiKeyMiddleware } from '../common/middleware/apiKey.middleware';
import { ProductsService } from '../products/products.service';
import { PoliciesService } from '../policies/policies.service';
import { PoliciesController } from '../policies/policies.controller';
import {
  validatePolicy,
  validatePolicyUpdate,
} from '../policies/policy.middleware';

const router = Router();

const productsService = new ProductsService();
const policiesService = new PoliciesService(productsService);
const controller = new PoliciesController(policiesService);

router.use(apiKeyMiddleware);

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validatePolicy, controller.create);
router.put('/:id', validatePolicyUpdate, controller.update);
router.delete('/:id', controller.delete);

export { router as policiesRouter };
