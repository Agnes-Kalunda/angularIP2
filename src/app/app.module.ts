import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { UserComponent } from './user/user.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    UserComponent,
    LandingComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }