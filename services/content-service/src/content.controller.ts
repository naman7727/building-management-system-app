import { Controller, Get } from '@nestjs/common';

@Controller()
export class ContentController {
  @Get('health') health() { return { status: 'ok', service: 'content-service' }; }
  @Get('buildings') buildings() { return []; }
  @Get('maintenance') maintenance() { return []; }
  @Get('announcements') announcements() { return []; }
}
