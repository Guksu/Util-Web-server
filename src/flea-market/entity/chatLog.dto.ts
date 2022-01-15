import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType('ChatLogInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class ChatLog {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  chatLogNo: number;

  @Column()
  @Field((type) => Number)
  @IsNumber()
  room: number;

  @Column()
  @Field((type) => String)
  @IsString()
  name: string;

  @Column()
  @Field((type) => String)
  @IsString()
  chatLog: string;
}
