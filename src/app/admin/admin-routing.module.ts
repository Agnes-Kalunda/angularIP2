import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LandingComponent } from '../landing/landing.component';
import { RepositoryComponent } from '../repository/repository.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {path:'',component: LandingComponent},
  {path:'Home', component:LandingComponent},
  {path:'Profiles',component: UserComponent},
  {path:'Home', component:LandingComponent},
  {path: 'Repositories', component: RepositoryComponent},
];

@NgModule({
  declarations: [],

  imports:  [RouterModule.forRoot(routes),CommonModule,],
  exports: [RouterModule, RouterModule]
})
export class AdminRoutingModule { }
