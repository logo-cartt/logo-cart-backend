import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsUUID
} from 'class-validator';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @IsDateString()
  @IsNotEmpty()
  readonly delivery_time: string;

  @IsNumber()
  @IsNotEmpty()
  readonly delivery_fee: number;

  @IsString()
  @IsNotEmpty()
  readonly search_tags: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  readonly category_id: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  readonly seller_id: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID('4')
  readonly color_id: string;
}
