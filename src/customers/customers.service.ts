import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customers.create({ data: createCustomerDto });
  }

  findAll() {
    return this.prisma.customers.findMany();
  }

  findOne(id: string) {
    return this.prisma.customers.findUnique({ where: { id } });
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customers.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  remove(id: string) {
    return this.prisma.customers.delete({ where: { id } });
  }
}
