import { IsUUID } from 'class-validator';

export class UpdateCartDto {
    @IsUUID('4')
    customer_id: string;
}
