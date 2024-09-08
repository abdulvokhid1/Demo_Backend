import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TaskService {
  // @Cron('0 * * * * *', {
  //   name: 'cron1',
  // })
  // handleCron() {
  //   // Handle Cron
  //   console.log('[TaskService1]:', new Date().toLocaleString('ko-KR'));
  // }
  // @Cron('*/5 * * * * *', {
  //   name: 'cron2',
  // })
  // handleCron2() {
  //   // Handle Cron
  //   console.log('[TaskService2]:', new Date().toLocaleString('ko-KR'));
  // }
}
