import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisServiceProvider {
  private readonly redis: Redis;

  constructor() {
    // Default localhost:6379
    this.redis = new Redis();

    this.redis.subscribe('channel-1', (error, message) => {
      if (error) {
        throw error;
      }
    });

    this.redis.on('message', (channel, message) => {
      console.log(
        `Receiving message "${message}" from redis pub/sub channel ${channel}`,
      );
    });
  }

  getRedisInstance() {
    return this.redis;
  }
}
