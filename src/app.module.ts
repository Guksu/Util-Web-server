import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entitiy/user.entity';
import { UserModule } from './user/user.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entitiy/account.entity';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.PASSWORD,
      database: 'util-web',
      entities: [User, Account],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req, connection }) => {
        if (req) {
          const user = req.headers.authorization;
          return { ...req, user };
        } else {
          return connection;
        }
      },
    }),
    UserModule,
    CommonModule,
    AuthModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
