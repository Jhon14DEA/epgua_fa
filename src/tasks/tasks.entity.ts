export enum TaskSatus{
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    DONE = "IN_PROGRESS",
}
export class Task{
    id:string;
    title:string;
    description:string;
    status:TaskSatus;
}

const task = new Task()

