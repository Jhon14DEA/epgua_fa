import { Injectable } from '@nestjs/common';
import { Task, TaskSatus } from './tasks.entity';
import { v4 } from "uuid"
import { updateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
    // de forma resumida esto hace la consulta a la base de datoso u obtenemos la informacion de ahi
     private tasks: Task[] =[
        {
            id:"1",
            title:"test",
            description:"t1",
            status: TaskSatus.PENDING
        },
    ];

    getAllTask(){
        return this.tasks
    }
    createTask(title: string, description:string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskSatus.PENDING
        }
        this.tasks.push(task)
        return task
    }
    deleteTask(id:string){
        this.tasks = this.tasks.filter(task => task.id !==id)
    }
    updateTask(id:string, updateFields:updateTaskDto) : Task{
        const task = this.getTaskbyId(id)//buscamos la tarea despues cobinarlar 
        const newTask= Object.assign(task, updateFields)//actualizacion si no hay nada deja como estaba
        this.tasks = this.tasks.map(task=>task.id==id ? newTask : task)//recorremos y actualizamos
        return newTask;
    }
    getTaskbyId(id:string) : Task{
        return this.tasks.find(task => task.id ==id)
    }

}
