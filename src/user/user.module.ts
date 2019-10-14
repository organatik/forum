import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './model/user.model';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
    imports: [
        TypegooseModule.forFeature([User])
    ],
    controllers: [
    UsersController
],
    providers: [
        UsersService
    ]
})
export class UserModule { }
