import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRepository } from './admin.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminRepository])
  ],
  providers: [AdminService],
  exports:[AdminService],
  controllers: [AdminController],
})
export class AdminModule {}
