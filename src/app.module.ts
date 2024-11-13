import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { Employees } from './modules/basic-reports/entities';

@Module({
  imports: [
    BasicReportsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        name: configService.get('DB_NAME'),
        password: configService.get('DB_PASSWORD'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        // autoLoadEntities: false,
        // synchronize: false,
        entities: [Employees],
      }),
    }),
  ],
})
export class AppModule {}
