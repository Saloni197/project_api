import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { ProjectSchema } from './schema/project_schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'projects_api',schema:ProjectSchema}],'projects_api')],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
