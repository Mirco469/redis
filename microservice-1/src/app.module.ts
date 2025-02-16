import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisServiceProvider } from './redis.service-provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RedisServiceProvider],
})
export class AppModule {}
