import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose";

export type ResponseDocument = Response & Document

@Schema({ timestamps: true })
export class Response {
    @Prop({ required: true })
    text: String;
}

export const ResponseSchema = SchemaFactory.createForClass(Response)