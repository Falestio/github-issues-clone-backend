import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpacesModule } from './spaces/spaces.module';
import { QuestionsModule } from './questions/questions.module';


@Module({
  imports: [
      SpacesModule,
      MongooseModule.forRoot('mongodb+srv://falestio:falestio@cluster0.utciks0.mongodb.net/?retryWrites=true&w=majority'),
      QuestionsModule,
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
