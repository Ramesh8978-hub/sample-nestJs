import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name:'default',
       type:'mongodb',
       host:'localhost',
       port:27017,
       database:'sampleNestJs',
       useNewUrlParser:true,
       autoLoadEntities:true,
       useUnifiedTopology:true,
       entities:[join(__dirname,'**/**.entity.ts')]
    }),
    StudentModule,
    AuthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
