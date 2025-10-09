import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CartsService {
  constructor(private prisma: PrismaService) {}

  create(createCartDto: CreateCartDto) {
    return this.prisma.carts.create({ data: createCartDto });
  }

  findAll() {
    return this.prisma.carts.findMany({
      include: {
        customer: true,
        ordersCarts: true,
        productsOnCarts: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.carts.findUnique({
      where: { id },
      include: {
        customer: true,
        productsOnCarts: true,
        ordersCarts: true,
      },
    });
  }

  update(id: string, updateCartDto: UpdateCartDto) {
   return this.prisma.carts.update({
      where: { id },
      data: updateCartDto,
    });
  }

  remove(id: string) {
    return this.prisma.carts.delete({ where: { id } });
  }
}
