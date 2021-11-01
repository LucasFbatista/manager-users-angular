import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ROUTES
import { AppRoutingModule } from './app-routing.module';

//MODULES
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { UserModule } from './modules/user/user.module';
import { AboutModule } from './modules/about/about.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

//COMPONENTS
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    UserModule,
    AboutModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
