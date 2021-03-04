import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';

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
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
