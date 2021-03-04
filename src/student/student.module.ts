import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from './student.controller';
import { studentRepository } from './student.repository';
import { StudentService } from './student.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([studentRepository])
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
