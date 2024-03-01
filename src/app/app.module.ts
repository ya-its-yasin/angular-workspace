import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, NgModel } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResttestComponent } from './resttest/resttest.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PostComponent } from './crud/post/post.component';
import { UpdateComponent } from './crud/update/update.component';
import { DeleteComponent } from './crud/delete/delete.component';
import { FetchComponent } from './crud/fetch/fetch.component';
import { FindByIdComponent } from './crud/find-by-id/find-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    LoginComponent,
    ResttestComponent,
    PostComponent,
    UpdateComponent,
    DeleteComponent,
    FetchComponent,
    FindByIdComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
