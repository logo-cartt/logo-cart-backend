import { Injectable } from '@nestjs/common';
import { CreateColorDto } from './dto/create-color.dto';
import { UpdateColorDto } from './dto/update-color.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColorsService {
  constructor(private prisma: PrismaService) {}

  create(createColorDto: CreateColorDto) {
    return this.prisma.colors.create({ data: createColorDto });
  }

  findAll() {
    return this.prisma.colors.findMany({ where: { deleted_at: null } });
  }

  findOne(id: string) {
    return this.prisma.colors.findUnique({ where: { id, deleted_at: null } });
  }

  update(id: string, updateColorDto: UpdateColorDto) {
    return this.prisma.colors.update({
      where: { id, deleted_at: null },
      data: updateColorDto,
    });
  }

  remove(id: string) {
    return this.prisma.colors.update({
      where: { id },
      data: { deleted_at: new Date() },
    });
  }
}
