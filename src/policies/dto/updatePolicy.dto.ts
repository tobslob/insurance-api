import { PartialType } from '@nestjs/mapped-types';
import { CreatePolicyDto } from './createPolicy.dto';

export class UpdatePolicyDto extends PartialType(CreatePolicyDto) {}
