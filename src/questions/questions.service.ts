import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { QuestionDocument } from './questions.model';
import { ResponseDocument } from './responses.model';
import { SpacesService } from 'src/spaces/spaces.service';
 
@Injectable()
export class QuestionsService {
    constructor(
        @InjectModel('question') private questionModel: Model<QuestionDocument>,
        @InjectModel('response') private responseModel: Model<ResponseDocument>,
    ){}

    async findAll(){
        return await this.questionModel.find()
    }

    async createQuestion(text: String){
        const newQuestion = await new this.questionModel({
            text: text
        })
        await newQuestion.save()
        return newQuestion
    }

    async insertResponse(questionId: String, response: any){
        const question = await this.questionModel.findById(questionId)
        console.log(question)
        question.responses.push(response)
        await question.save()
    }

    async createResponse(text: String){
        const newResponse = await new this.responseModel({
            text: text
        })
        await newResponse.save()

        return newResponse
    }
}
