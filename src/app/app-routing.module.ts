import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ComponentsRoutingModule } from './components/components-routing.module';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ComponentsRoutingModule,
    AuthRoutingModule
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
