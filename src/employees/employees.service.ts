/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.employeeRepository.save(createEmployeeDto);
  }

  async findAll() {
    return await this.employeeRepository.find();
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne(id);
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.employeeRepository.update({ id: id }, updateEmployeeDto);
  }

  async remove(id: number) {
    return await this.employeeRepository.delete({ id: id });
  }

  async upsertEmployees(employees?: Employee[]) {
    return await this.employeeRepository.upsert(employees, ['projectId']);
  }
}
