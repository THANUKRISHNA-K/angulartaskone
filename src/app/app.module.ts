import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routing1Component } from './routing1/routing1.component';
import { Routing2Component } from './routing2/routing2.component';
import { Routing3Component } from './routing3/routing3.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {TestCanActivate,TestCanDeactivate} from './guards';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
const route:Routes=[
  {path:'', redirectTo:'home' ,pathMatch:'full'},
  {path:'routing', component:Routing1Component, children:[{path:'childrouting',component:Routing3Component}]},
  {path:'home',component:Routing2Component},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[TestCanActivate], canDeactivate: [TestCanDeactivate]},
  {path:'logout',component:LogoutComponent},{path:'**',component:ErrorComponent},
  {path:'error',component:ErrorComponent}];
 
@NgModule({
  declarations: [
    AppComponent,
    Routing1Component,
    Routing2Component,
    Routing3Component,
    ErrorComponent,
    LoginComponent,
    ProfileComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forChild(route),
    MatButtonModule,
    NgbModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
