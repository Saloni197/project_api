import { ProjectPriority, ProjectStatus } from "../projects.model";

export class CreateProjectDto{
    id:string;
    name:string;
    short_name:string;
    status:ProjectStatus
    Priority:ProjectPriority;
    discription:string;
    hours:number;
    project_type:string
}