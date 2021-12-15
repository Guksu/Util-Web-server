import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/auth.guard';
import { GetUser } from 'src/auth/auth.user-decorator';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { LoginInput, LoginOutput } from './dto/login.dto';
import { ProfileInfoOutput } from './dto/profileInfo.dto';
import { User } from './entitiy/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((type) => CreateUserOutput)
  creataeUser(
    @Args('input') createUserInput: CreateUserInput,
  ): Promise<CreateUserOutput> {
    return this.userService.createUser(createUserInput);
  }

  @Mutation((type) => LoginOutput)
  login(@Args('input') loginInput: LoginInput): Promise<LoginOutput> {
    return this.userService.login(loginInput);
  }

  @Query((type) => ProfileInfoOutput)
  @UseGuards(GqlAuthGuard)
  profileInfo(@GetUser() user: User): Promise<ProfileInfoOutput> {
    return this.userService.profileInfo(user);
  }
}
