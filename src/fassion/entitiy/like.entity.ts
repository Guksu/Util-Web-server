import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('LikeInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Like {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  likeNo: number;

  @Column()
  @Field((type) => Number)
  fassionNo: number;

  @Column()
  @Field((type) => Number)
  userNo: number;
}
