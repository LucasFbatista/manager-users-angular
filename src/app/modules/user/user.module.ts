import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

//COMPONENTS
import { UserListComponent } from './components/user-list/user-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';

//PAGES VIEW
import { UserComponent } from './pages/user/user.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserComponent,
  ]
})
export class UserModule { }
