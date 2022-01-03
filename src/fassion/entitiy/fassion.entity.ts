import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString } from 'class-validator';
import { User } from 'src/user/entitiy/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@InputType('FassionInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Fassion {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  fassionNo: number;

  @Column({ type: 'date' })
  @Field((type) => String)
  @IsString()
  date: string;

  @Column()
  @Field((type) => String)
  @IsString()
  imgUrl: string;

  @Column()
  @Field((type) => String)
  secret: string;

  @ManyToOne((type) => User, (User) => User.fassion, { cascade: true })
  @Field((type) => User)
  user: User;

  @Column()
  @Field((type) => String)
  userImg: string;

  @Column({ default: 0 })
  @Field((type) => Number, { defaultValue: 0 })
  like: number;
}
