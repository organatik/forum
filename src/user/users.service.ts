import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from './model/user.model';
import { ReturnModelType } from "@typegoose/typegoose";
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userModel: ReturnModelType<typeof User> ){}

    async create(createUser: CreateUserDto): Promise<User>{
        const createdUser = new this.userModel(createUser);
        return await createdUser.save();                                                                                
    }

    async findAllUsers(): Promise<User[] | null> {
        return await this.userModel.find().exec();
    }
}
