import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { SharedModule } from 'src/app/shared/shared.module';

//COMPONENTS
import { DashboardComponent  } from './components/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
