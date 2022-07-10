import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SpaceDocument } from './spaces.model';

@Injectable()
export class SpacesService {
    
    constructor(@InjectModel('space') private spaceModel: Model<SpaceDocument>){}

    async getAll(){
        return await this.spaceModel.find()
    } 

    async create(title: String){
        const newSpace = new this.spaceModel(title)

        await newSpace.save()
        return newSpace
    }

    async insertQuestion(questionID: String, spaceTitle: String){
        const space = await this.spaceModel.findOne({title: spaceTitle})
        space.questions.push(questionID)
        await space.save()
    }
}
