import { IsUUID } from 'class-validator';
export class CreateCartDto {
    @IsUUID('4')
    customer_id: string;
}
