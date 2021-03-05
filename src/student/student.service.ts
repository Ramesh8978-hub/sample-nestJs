import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDTO } from 'src/dto/student.dto';
import { Student } from 'src/entities/student.entity';
import { studentRepository } from './student.repository';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(studentRepository)
        private studentRepository:studentRepository
        ){}

    async addStudent(studentDto: StudentDTO): Promise<Student> {
        return this.studentRepository.addStudent(studentDto);
    }
    getStudents(){
        const student = this.studentRepository.find()
        return student
    }
    getStudentById(id:string):Promise<Student>{
        const student = this.studentRepository.findOne(id)
        return student
    }
  async deleteStudent(id:string):Promise<void>{
         const student = await this.studentRepository.delete(id)
    }
   async updateStudent(id:string,studentDto: StudentDTO):Promise<Student>{
         const studentData = await this.getStudentById(id)
         const { name, email, password } = studentDto;
         studentData.name = name;
         studentData.email = email;
         studentData.password = password;
         await studentData.save()
         
         return studentData;
    }
}
