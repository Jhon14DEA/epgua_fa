import { from, min } from 'rxjs';
import { TaskSatus } from '../tasks.entity';
import { IsString,IsNotEmpty,Min,MinLength,IsOptional,IsIn} from 'class-validator';


export class createTaskDto{
    @IsString()
    @IsNotEmpty()
    //@Min(3)//minimos son 3 ademas revisas un titulo < a 3
    @MinLength(3)//el valor minimo es 3
    title:string
    @IsString()
    description:string
}

export class updateTaskDto{
    @IsString()
    @IsOptional()
    title?:string
    @IsString()
    @IsOptional()
    description?: string
    @IsString()
    @IsOptional()
    @IsIn([TaskSatus.DONE,TaskSatus.PENDING,TaskSatus.IN_PROGRESS])//hace una comparacion estricta-
    status?:TaskSatus
}