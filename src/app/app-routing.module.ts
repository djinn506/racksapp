import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { RacksComponent } from './racks/racks.component';

const routes: Routes = [
  { path: '',redirectTo: 'racks',pathMatch: 'full' },
  { path: 'racks', component: RacksComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
