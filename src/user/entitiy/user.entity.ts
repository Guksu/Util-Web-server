import { InternalServerErrorException } from '@nestjs/common';
import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Account } from 'src/account/entitiy/account.entity';
import { Fassion } from 'src/fassion/entitiy/fassion.entity';
import { FoodBoard } from 'src/food-board/entitiy/food-board.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  userNo: number;

  @Column()
  @Field((type) => String)
  @IsString()
  name: string;

  @Column({ unique: true })
  @Field((type) => String)
  @IsString()
  id: string;

  @Column()
  @Field((type) => String)
  @IsString()
  password: string;

  @Column({
    default:
      'https://guksuintengiblemarketuplaodsol6425.s3.ap-northeast-2.amazonaws.com/1640158050027user.png',
  })
  @Field((type) => String, {
    defaultValue:
      'https://guksuintengiblemarketuplaodsol6425.s3.ap-northeast-2.amazonaws.com/1640158050027user.png',
  })
  @IsString()
  userImgUrl?: string;

  @OneToMany((type) => Account, (Account) => Account.user, {
    onDelete: 'CASCADE',
  })
  @Field((type) => [Account], { nullable: true })
  account: [Account];

  @OneToMany((type) => Fassion, (Fassion) => Fassion.user, {
    onDelete: 'CASCADE',
  })
  @Field((type) => [Fassion], { nullable: true })
  fassion: [Fassion];

  @OneToMany((type) => FoodBoard, (Fassion) => Fassion.user, {
    onDelete: 'CASCADE',
  })
  @Field((type) => [FoodBoard], { nullable: true })
  foodBoard: [FoodBoard];

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (error) {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(checkPassword: string): Promise<boolean> {
    try {
      return await bcrypt.compare(checkPassword, this.password);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
