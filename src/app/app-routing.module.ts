import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: 'untammed', component: LandingPageComponent},
  { path: 'Login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'event', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
