import { Routes } from '@angular/router';
import { Acccessoires } from './accessoires/accessoires';
import { AddAccessoire } from './add-accessoire/add-accessoire';
import { UpdateAccessoire } from './update-accessoire/update-accessoire';

export const routes: Routes = [
    {path:"accessoires", component: Acccessoires},
    {path:"add-accessoire", component:AddAccessoire},
    {path:"", redirectTo:"/accessoires", pathMatch:"full"},
    {path:"update-accessoire/:id", component:UpdateAccessoire }
];
