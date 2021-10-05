import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [ProjectsModule,MongooseModule.forRoot('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',{connectionName:'projects_api'})],
  controllers: [],
  providers: [],
})
export class AppModule {}
