import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';

//COMPONENTS
import { NavBarComponent } from './template/nav-bar/nav-bar.component';
import { SideBarComponent } from './template/side-bar/side-bar.component';
import { FooterComponent } from './template/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule,

  ],
  declarations: [
    NavBarComponent,
    SideBarComponent,
    FooterComponent
  ],
  exports:[
    NavBarComponent,
    SideBarComponent,
    FooterComponent
  ],
  providers: [],
})
export class CoreModule { }
