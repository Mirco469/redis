import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisServiceProvider {
  private readonly redis: Redis;

  constructor() {
    // Default localhost:6379
    this.redis = new Redis();
  }

  getRedisInstance() {
    return this.redis;
  }
}
