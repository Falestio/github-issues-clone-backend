import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpacesModule } from './spaces/spaces.module';
import { QuestionsModule } from './questions/questions.module';


@Module({
  imports: [
      SpacesModule,
      MongooseModule.forRoot('mongodb://localhost:27017/github-issues-clone'),
      QuestionsModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
