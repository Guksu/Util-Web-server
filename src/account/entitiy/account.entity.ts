import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@InputType('AccountInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  accountNo: number;

  @Column()
  @Field((type) => String)
  @IsString()
  category: string;

  @Column()
  @Field((type) => String)
  @IsString()
  type: string;

  @Column()
  @Field((type) => Number)
  @IsNumber()
  amount: number;

  @Column({ type: 'date' })
  @Field((type) => String)
  @IsString()
  date: string;

  @ManyToOne((type) => User, (User) => User.account, { cascade: true })
  @Field((type) => User)
  user: User;
}
