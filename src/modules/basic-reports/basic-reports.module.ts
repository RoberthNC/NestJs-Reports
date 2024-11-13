import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicReportsController } from './basic-reports.controller';
import { BasicReportsService } from './basic-reports.service';
import { Employees } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Employees])],
  controllers: [BasicReportsController],
  providers: [BasicReportsService],
  exports: [TypeOrmModule],
})
export class BasicReportsModule {}
