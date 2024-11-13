import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import 'dotenv/config';

async function main() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger(main.name);

  await app.listen(process.env.PORT);

  logger.log(`Application is running on PORT ${process.env.PORT}`);
}
main();
