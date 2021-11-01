import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//MODULES
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

//SERVICES
import { UserService } from './services/user.service';

//PIPES
import { RoleUserPipe } from './utils/pipes/role.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  declarations: [
    HeaderComponent,
    ButtonComponent,
    RoleUserPipe,
  ],
  exports:[
    HeaderComponent,
    ButtonComponent,
    RoleUserPipe,
  ],
  providers:[
    UserService
  ]
})
export class SharedModule { }
