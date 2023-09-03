import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { StacksComponent } from './stacks/stacks.component';
import { HomeComponent } from './home/home.component';
import { CreateServerComponent } from './create-server/create-server.component';
import { CreateComponent } from './createStack/createStack.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  /* { path: '',redirectTo: 'stacks',pathMatch: 'full' }, */
  { path: '',redirectTo: 'home',pathMatch: 'full' },
  /*first-match wins, more specific routes should be placed above */
  { path: 'newserver', component: CreateServerComponent },
  { path: 'stacks/new', component: CreateComponent },
  { path: 'stacks/update', component: UpdateComponent },
  { path: 'stacks', component: StacksComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
