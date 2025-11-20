import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
export class CreateCartDto {
  @IsUUID('4')
  @IsString()
  @IsNotEmpty()
  customer_id: string;
}
