import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './questions.model';
import { ResponseSchema } from './responses.model';
import { SpacesModule } from 'src/spaces/spaces.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'question', schema: QuestionSchema}]),
    MongooseModule.forFeature([{name: 'response', schema: ResponseSchema}]),
    SpacesModule
  ],
  providers: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
