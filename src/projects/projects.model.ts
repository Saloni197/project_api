export interface Project{
    id:string;
    name:string;
    short_name:string;
    status:ProjectStatus;
    Priority:ProjectPriority;
    discription:string;
    hours:number;
    project_type:string
}

export enum ProjectStatus{
    STARTED ='STARTED',
    ON_HOLD = 'ON_HOLD',
    STACK = 'STACK',
    COMPLETED = 'COMPLETED'
}

export enum ProjectPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH'
}