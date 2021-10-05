import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project, ProjectPriority, ProjectStatus } from './projects.model';

@Injectable()
export class ProjectsService {
    constructor(@InjectModel('projects_api') private readonly projectModel:Model<Project> ){}

    async getAllProjects():Promise<Project[]>{
        return await this.projectModel.find()
    }
    async createProject(createProjectDto:CreateProjectDto):Promise<Project>{
        const createdProjet = new this.projectModel(createProjectDto);
            return createdProjet.save();
    }
    
    async deleteProject(id:String):Promise<void>{
        const result = await this.projectModel.findByIdAndDelete({_id:id})
        console.log(result)
    }

    async updateProject(id:String,project:Project):Promise<Project>{
    return await this.projectModel.findByIdAndUpdate(id,project,{new:true})
    }


}
