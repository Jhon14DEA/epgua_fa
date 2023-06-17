import { Controller,Get, Post,Body,Delete,Param,Put,Patch } from '@nestjs/common';//patch actualizar parcialmente algo
import { TasksService } from './tasks.service';
import { Task, TaskSatus } from './tasks.entity';
import { createTaskDto, updateTaskDto } from './dto/task.dto';
// decimos la ruta que va ser para acceder en el navegador
@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService){

    }
    @Get()
    getAllTask(){
        return this.tasksService.getAllTask();
    }
    // @Body: sirve para enviarme un dato en formato jason con valores y lo guardamos en newTask: any
    // Podemos usar un DTO o un date object transfer a traves del cliente al servidor para ellos usamos dto es para saber que esta viniendo o 
    // validar que tipo de informacion espero que el cliente mande. 
    @Post()
    createTask(@Body() newTask: createTaskDto){
       return this.tasksService.createTask(newTask.title,newTask.description)
    }
    
    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.tasksService.deleteTask(id)
    }

    @Patch(':id')
    updateTask(@Param('id') id:string, @Body() updateFilds:updateTaskDto){
        return this.tasksService.updateTask(id,updateFilds)
    }
}
