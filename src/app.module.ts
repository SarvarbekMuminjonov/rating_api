import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { TopPageModule } from './top-page/top-page.module';
import { RewievModule } from './rewiev/rewiev.module';

@Module({
  imports: [AuthModule, ProductModule, TopPageModule, RewievModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
