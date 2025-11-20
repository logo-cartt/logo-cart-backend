import { Module } from '@nestjs/common';
import { ColorsService } from './colors.service';
import { ColorsController } from './colors.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ColorsController],
  providers: [ColorsService],
  imports: [PrismaModule]
})
export class ColorsModule {}
