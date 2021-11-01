import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { DashboardComponent } from './modules/dashboard/components/dashboard.component';
import { UserComponent } from './modules/user/pages/user/user.component';
import { UserCreateComponent } from './modules/user/components/user-create/user-create.component';
import { UserDeleteComponent } from './modules/user/components/user-delete/user-delete.component';
import { AboutComponent } from './modules/about/component/about/about.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent
  },
  {
    path:'users',
    children: [
      {
        path: '',
        component:UserComponent,
      },
      {
        path:'create',
        children:[
          {
            //USER CREATE
            path:'',
            component: UserCreateComponent
          },
          {
            //USER EDIT
            path:':id',
            component: UserCreateComponent
          }
        ]
      },
      {
        //USER DELETE
        path:':id',
        component:UserDeleteComponent
      },
    ]
  },
  {
    path:'about',
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
