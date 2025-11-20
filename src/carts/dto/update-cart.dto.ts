import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCartDto {
  @IsUUID('4')
  @IsString()
  @IsNotEmpty()
  customer_id: string;
}
