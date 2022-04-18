import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/entities/employee.entity';

@Module({
  imports: [
    EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '158.101.160.214',
      port: 5432,
      username: 'user-manager',
      password: 'us837@!sid;',
      schema: 'public',
      database: 'employees',
      entities: [Employee],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
