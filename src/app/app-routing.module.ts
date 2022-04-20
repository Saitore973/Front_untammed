import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';XMLDocument
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{path: 'Register', component: RegisterComponent }, {path: 'Details', component:DetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
