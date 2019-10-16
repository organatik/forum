import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interface/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getUsers(): Promise<User[]> {
      return await  this.userService.findAllUsers();
    }

    @Post()
    async createUser(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.create(user);
    }
}
