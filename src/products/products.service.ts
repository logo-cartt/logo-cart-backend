import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}
  
  create(createProductDto: CreateProductDto) {
    return this.prisma.products.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.products.findMany({ where: { deleted_at: null } });
  }

  findOne(id: string) {
    return this.prisma.customers.findUnique({
      where: { id, deleted_at: null },
    });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.customers.update({
      where: { id, deleted_at: null },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prisma.customers.delete({ where: { id, deleted_at: null } });
  }
}
