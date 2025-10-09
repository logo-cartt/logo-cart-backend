import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { PrismaModule } from './prisma/prisma.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [CustomersModule, PrismaModule, CartsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
