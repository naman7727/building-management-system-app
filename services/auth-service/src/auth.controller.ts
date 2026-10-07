import { Body, Controller, Get, Post } from '@nestjs/common';
import { IsEmail, IsString, MinLength } from 'class-validator';

class CredentialsDto {
  @IsEmail() email!: string;
  @IsString() @MinLength(8) password!: string;
}

@Controller('auth')
export class AuthController {
  @Post('register') register(@Body() body: CredentialsDto) { return { service: 'auth', action: 'register', email: body.email }; }
  @Post('login') login(@Body() body: CredentialsDto) { return { service: 'auth', action: 'login', email: body.email }; }
  @Get('health') health() { return { status: 'ok', service: 'auth-service' }; }
}
