import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { PrismaModule } from './prisma/prisma.module';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [CustomersModule, PrismaModule, SellersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
