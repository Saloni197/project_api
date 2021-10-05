import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './projects.model';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private projectsservice:ProjectsService){}

    @Get()
    getAllProjects():Promise<Project[]>{
        return this.projectsservice.getAllProjects()
    }

    @Post()
    createProject(@Body() createProjectDto:CreateProjectDto):Promise<Project>{
       return this.projectsservice.createProject(createProjectDto)
    }

    @Delete('/:id')
    deleteProject(@Param('id') id:String):Promise<void>{
      return this.projectsservice.deleteProject(id)
    }
    
    @Patch(':id')
    updateProject(@Body() updateProjectDto:CreateProjectDto, @Param('id') id:String):Promise<Project>{
     return this.projectsservice.updateProject(id,updateProjectDto)
    }  

}
