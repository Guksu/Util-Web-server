import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
import { FleaMarket } from 'src/flea-market/entity/flea-market.entity';
import { FoodBoard } from 'src/food-board/entitiy/food-board.entity';
import { User } from './entitiy/user.entity';
import { JwtStrategy } from './jwt.strategy';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_KEY,
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),
    TypeOrmModule.forFeature([User, Fassion, FoodBoard, FleaMarket]),
  ],
  providers: [UserResolver, UserService, JwtStrategy],
  exports: [UserService, JwtStrategy],
})
export class UserModule {}
