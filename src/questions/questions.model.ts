import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ResponseSchema, Response } from "./responses.model";
import { Document } from "mongoose";

export type QuestionDocument = Question & Document

@Schema({ timestamps: true })
export class Question {
    @Prop({required: true})
    text: String;

    @Prop()
    responses: Array<Response>;
}

export const QuestionSchema = SchemaFactory.createForClass(Question)

