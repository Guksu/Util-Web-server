import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@InputType('FoodBoardInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class FoodBoard {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  FoodBoardNo: number;

  @Column()
  @Field((type) => String)
  @IsString()
  category: string;

  @Column()
  @Field((type) => String)
  @IsString()
  title: string;

  @Column()
  @Field((type) => String)
  @IsString()
  content: string;

  @Column({ nullable: true })
  @Field((type) => String, { nullable: true })
  @IsString()
  imgUrl?: string;

  @Column({ type: 'date' })
  @Field((type) => String)
  @IsString()
  date: string;

  @Column({ default: 0 })
  @Field((type) => Number)
  viwe: number;

  @ManyToOne((type) => User, (User) => User.foodBoard, { cascade: true })
  @Field((type) => User)
  user: User;
}
