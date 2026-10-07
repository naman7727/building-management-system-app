import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ContentController } from './content.controller';

@Module({ imports: [ConfigModule.forRoot({ isGlobal: true })], controllers: [ContentController] })
export class ContentModule {}
