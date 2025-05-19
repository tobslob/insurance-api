import { IsString, IsNumber } from 'class-validator';

export class CreatePolicyDto {
  @IsString() id: string;
  @IsString() productId: string;
  @IsString() customerName: string;
  @IsString() startDate: string;
  @IsString() endDate: string;
  @IsNumber() premium: number;
  @IsString() status: string;
  @IsString() createdAt: string;
}
