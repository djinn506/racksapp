import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StacksComponent } from './stacks/stacks.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  /* { path: '',redirectTo: 'stacks',pathMatch: 'full' }, */
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  { path: 'stacks', component: StacksComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
