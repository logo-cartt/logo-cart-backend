import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateSellerDto {
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly seller_name: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
}
