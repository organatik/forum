import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from './interface/user.interface';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from '../auth/login.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async create(createUser: CreateUserDto): Promise<User> {
    const userNameDuplicate = await this.userModel.findOne({ username: createUser.username });
    const userEmailDuplicate = await this.userModel.findOne({ email: createUser.email });
    if (userNameDuplicate) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
    if (userEmailDuplicate) {
      throw new HttpException(`User with email: ${createUser.email} already exists`, HttpStatus.BAD_REQUEST);
    }
    const createdUser = new this.userModel(createUser);
    return await createdUser.save();
  }

  async findByLogin(loginInfo: LoginDto) {
    const {email, password} = loginInfo;
    if (!email) {
      throw new HttpException('Invalid Credentionals', HttpStatus.UNAUTHORIZED);
    }
  }

  async findAllUsers(): Promise<User[] | null> {
    return await this.userModel.find().exec();
  }
}
