import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/client/login-page/login-page.component';
import { HomePageComponent } from './component/client/home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './component/client/home-page/hello.component';
import { ProgressBarComponent } from './component/client/home-page/progress-bar.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-details/author-list.component';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
    ToggleComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
