import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

export type SpaceDocument = Space & Document

@Schema({ timestamps: true })
export class Space {
    @Prop({ required: true })
    title: String;

    @Prop()
    questions: Array<String>;
}

export const SpaceSchema = SchemaFactory.createForClass(Space)