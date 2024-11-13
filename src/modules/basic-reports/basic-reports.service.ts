import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class BasicReportsService {
  constructor(
    @InjectRepository(Employees)
    private readonly employeesRepository: Repository<Employees>,
  ) {}

  async hello() {
    return await this.employeesRepository.find({ take: 1 });
  }
}
