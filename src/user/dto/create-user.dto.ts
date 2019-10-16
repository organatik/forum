import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @MinLength(10, {
    message: 'Username is too short',
  })
  @IsEmail()
  readonly email: string;

  @MinLength(6, {
    message: 'Password is too short',
  })
  @IsNotEmpty()
  readonly password: string;
}
