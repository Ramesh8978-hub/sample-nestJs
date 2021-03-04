import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StudentDTO } from 'src/dto/student.dto';
import { Student } from 'src/entities/student.entity';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private studentService: StudentService) { }
    @Post()
    addStudent(@Body() studentDto: StudentDTO): Promise<Student> {
        return this.studentService.addStudent(studentDto)
    }

    @Get()
    getStudents(){
        return this.studentService.getStudents();
    }
    @Get('/:id')
    getStudentById(@Param('id') id:string):Promise<Student>{
        return this.studentService.getStudentById(id);
    }

    @Delete('/:id')
    deleteStudent(@Param('id') id:string):Promise<void>{
        return this.studentService.deleteStudent(id)
    }
}
