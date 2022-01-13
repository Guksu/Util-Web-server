import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@InputType('FleaMarketInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class FleaMarket {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  FleaMakretNo: number;

  @Column()
  @Field((type) => String)
  @IsString()
  title: string;

  @Column({ length: 4000 })
  @Field((type) => String)
  @IsString()
  content: string;

  @Column({ type: 'date' })
  @Field((type) => String)
  @IsString()
  date: string;

  @Column({ default: 0 })
  @Field((type) => Number)
  view: number;

  @Column()
  @Field((type) => String)
  userImg: string;

  @Column({ nullable: true })
  @Field((type) => String, { nullable: true })
  productImg: string;

  @ManyToOne((type) => User, (User) => User.fleaMarket, { cascade: true })
  @Field((type) => User)
  user: User;

  @Column()
  @Field((type) => String)
  userName: string;
}
