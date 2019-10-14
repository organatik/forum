import { IsString, IsEmail, MinLength } from "class-validator";
import { prop, Typegoose } from "typegoose";

export class User extends Typegoose  {
    @MinLength(4)
    @IsString()
    @prop({ required: true , unique: true})
    username: string;

    @IsEmail()
    @prop({ required: true, unique: true })
    email: String

    @MinLength(6)
    @prop({ required: true })
    password: string
}
