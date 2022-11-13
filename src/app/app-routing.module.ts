import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StacksComponent } from './stacks/stacks.component';

const routes: Routes = [
  { path: '',redirectTo: 'stacks',pathMatch: 'full' },
  { path: 'stacks', component: StacksComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
