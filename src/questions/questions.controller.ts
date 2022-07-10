import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { SpacesService } from 'src/spaces/spaces.service';

@Controller('questions')
export class QuestionsController {
    constructor(
        private readonly questionsService: QuestionsService,
        private readonly spacesService: SpacesService,
    ){}

    @Get()
    async getAllQuestion(){
        return this.questionsService.findAll()
    }

    @Post()
    async createQuestion(@Body() question: any){
        const createdQuestion = await this.questionsService.createQuestion(question.text)
        await this.spacesService.insertQuestion(createdQuestion._id, question.spaceTitle)
        return createdQuestion
    }

    @Post('/response')
    async createResponse(@Body() response: any){
        const createdResponse = await this.questionsService.createResponse(response.text)
        await this.questionsService.insertResponse(response.questionId, createdResponse)
        return createdResponse
    }
}
