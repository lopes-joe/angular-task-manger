import { Routes } from "@angular/router";
import { CreateTaskComponent } from "../modules/tasks";
import { GetallTaskComponent } from "../modules/tasks/getall/";
import { UpdateTasksComponent } from "../modules/tasks/update/";

export const TaskRoutes: Routes = [
    // atalho para a listagem
    {
        path: 'tasks',
        redirectTo: 'tasks/getall'
    },
    {
        path: 'tasks/getall',
        component: GetallTaskComponent
    },
    {
        path: 'tasks/create',
        component: CreateTaskComponent
    },
    {
        path: 'tasks/update/:id',
        component: UpdateTasksComponent
    },

]