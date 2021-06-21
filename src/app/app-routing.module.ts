import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppComponent } from './app.component';
import { MiPapillaComponent } from './work/mi-papilla/mi-papilla.component';
import { UemailComponent } from './work/uemail/uemail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent}, 
  { path: 'mi-papilla', component: MiPapillaComponent},
  { path: 'uemail-mkt', component: UemailComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
