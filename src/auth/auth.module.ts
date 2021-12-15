import { Module } from '@nestjs/common';
import { GqlAuthGuard } from './auth.guard';

@Module({ providers: [GqlAuthGuard] })
export class AuthModule {}
