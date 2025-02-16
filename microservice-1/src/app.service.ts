import { Injectable, Logger } from '@nestjs/common';
import { RedisServiceProvider } from './redis.service-provider';

@Injectable()
export class AppService {
  logger = new Logger(AppService.name);

  constructor(private redisServiceProvider: RedisServiceProvider) {}

  publishRedisEvent(): void {
    const redis = this.redisServiceProvider.getRedisInstance();
    this.logger.log(`Publishing to redis...`);
    redis.publish('channel-1', 'This is microservice-1');
  }
}
