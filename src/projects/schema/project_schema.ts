import * as mongoose from 'mongoose'

export const ProjectSchema = new mongoose.Schema({
    id:String,
    name:String,
    short_name:String,
    status:String,
    Priority:String,
    discription:String,
    hours:Number,
    project_type:String
})