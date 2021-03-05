import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { use } from 'passport';
import { AdminDto } from 'src/dto/admin.dto';
import { Admin } from 'src/entities/admin.entity';
import { AdminRepository } from './admin.repository';


@Injectable()
export class AdminService {
    admin:any;
    constructor(
        @InjectRepository(AdminRepository)
        private readonly adminRepository: AdminRepository
    ) { }

    addAdmin(adminDto: AdminDto): Promise<Admin> {
        return this.adminRepository.addAdmin(adminDto)
    }
    async getAdmin() {
        this.admin = await this.adminRepository.find();
        return this.admin;
    }
    async findOne(username: string): Promise<Admin> {
        this.admin = await this.adminRepository.find();
        return this.admin.find(user => user.username === username);
    }
}

