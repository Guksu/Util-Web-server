import { InputType, ObjectType, PickType } from '@nestjs/graphql';
import { CommonOutput } from 'src/common/dto/output.dto';
import { FoodBoard } from '../entitiy/food-board.entity';

@InputType()
export class ViewUpadateInput extends PickType(FoodBoard, ['FoodBoardNo']) {}

@ObjectType()
export class ViewUpdateOutput extends CommonOutput {}
