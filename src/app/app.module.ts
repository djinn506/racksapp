import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StackListComponent } from './stack-list/stack-list.component';
import { ServerListComponent } from './server-list/server-list.component';
import { StacksComponent } from './stacks/stacks.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './createStack/createStack.component';
import { UpdateComponent } from './update/update.component';
import { CreateServerComponent } from './create-server/create-server.component';


@NgModule({
  declarations: [
    AppComponent,
    StackListComponent,
    ServerListComponent,
    StacksComponent,
    AboutUsComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    CreateServerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
