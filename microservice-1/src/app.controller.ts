import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('publish-redis-event')
  publishRedisEvent(): void {
    return this.appService.publishRedisEvent();
  }
}
