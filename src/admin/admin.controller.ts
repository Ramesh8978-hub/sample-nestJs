import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminDto } from 'src/dto/admin.dto';
import { Admin } from 'src/entities/admin.entity';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService:AdminService){}
    @Post()
    addAdmin(@Body() adminDto:AdminDto):Promise<Admin>{
      return this.adminService.addAdmin(adminDto);
    }
    @Get()
    getAdmin(){
        return this.adminService.getAdmin()
    }

}
