import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard } from './auth.guard'
import { UpdatePostComponent } from './update-post/update-post.component';
import { AddPostComponent } from './add-post/add-post.component';
const routes: Routes = [
//  { path: '', redirectTo: '/Login', pathMatch: 'full'},
{path:'login', component:LoginComponent},
{path:'Register',component:RegisterComponent},
{path:'',component:HomeComponent},
{path:'update/:id',component:UpdatePostComponent,canActivate :[AuthGuard]},
{path:'Add',component:AddPostComponent,canActivate :[AuthGuard]},
{path:'Dashboard', component :DashboardComponent,canActivate :[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
