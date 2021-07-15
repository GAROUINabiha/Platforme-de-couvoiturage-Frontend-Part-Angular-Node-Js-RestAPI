import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { TrajetComponent } from './components/trajet/trajet.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PubtrajetComponent } from './components/pubtrajet/pubtrajet.component';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { VemailComponent } from './components/vemail/vemail.component';
import { UppassComponent } from './components/uppass/uppass.component';

import { SearchComponent } from './components/search/search.component';
import { CommentComponent } from './components/comment/comment.component';
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('799705726167-vn6184fsovmps0kpbg5c7jabv15r3ias.apps.googleusercontent.com')
  }

]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  HomeComponent,
  TrajetComponent,
  RegisterComponent,
  LoginComponent,
  PubtrajetComponent,
  VemailComponent,
  UppassComponent,
  
  SearchComponent,
  CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
