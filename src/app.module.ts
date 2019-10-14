import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypegooseModule } from "nestjs-typegoose";
import { UserModule } from './user/user.module';
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:27017/forum', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
