import { Injectable } from '@nestjs/common';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellersService {
  constructor(private prisma: PrismaService) {}
  create(createSellerDto: CreateSellerDto) {
    return this.prisma.sellers.create({ data: createSellerDto });
  }

  findAll() {
    return this.prisma.sellers.findMany({ where: { deleted_at: null } });
  }

  findOne(id: string) {
    return this.prisma.sellers.findUnique({ where: { id, deleted_at: null } });
  }

  update(id: string, updateSellerDto: UpdateSellerDto) {
    return this.prisma.sellers.update({
      where: { id, deleted_at: null },
      data: updateSellerDto,
    });
  }

  remove(id: string) {
    return this.prisma.sellers.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
