import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';
export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  readonly password: string;
  
  @IsString()
  readonly phone: string;

  readonly address?: string;

  readonly payment_card?: string;
}
