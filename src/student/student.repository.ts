import { StudentDTO } from "src/dto/student.dto";
import { Student } from "src/entities/student.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Student)
export class studentRepository extends Repository<Student>{

    async addStudent(studentDto: StudentDTO): Promise<Student> {
        const { name, email, password } = studentDto;
        const student = new Student();
        student.name = name;
        student.email = email;
        student.password = password;
        await student.save()
        
        return student;

    }
}
