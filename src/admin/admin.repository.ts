import { EntityRepository, Repository } from "typeorm";
import { Admin } from "src/entities/admin.entity"
import { AdminDto } from "src/dto/admin.dto";

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin>{

    async addAdmin(adminDto: AdminDto): Promise<Admin> {
        const { username, password } = adminDto
        const admin = new Admin();
        admin.username = username;
        admin.password = password;
        
        await admin.save();

        return admin;
    }
}
