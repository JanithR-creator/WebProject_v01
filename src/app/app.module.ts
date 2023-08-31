import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavAComponent } from './nav-a/nav-a.component';
import { NavBComponent } from './nav-b/nav-b.component';
import { EnglishComponent } from './english/english.component';
import { ContactComponent } from './contact/contact.component';
import { WhyComponent } from './why/why.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { CouruselComponent } from './courusel/courusel.component';
import { FormsModule } from '@angular/forms';
import { PopboxComponent } from './popbox/popbox.component'


const route:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'nav-a',component:NavAComponent},
  {path:'nav-b',component:NavBComponent},
  {path:'english',component:EnglishComponent},
  {path:'contact',component:ContactComponent},
  {path:'why_ANI',component:WhyComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EnglishComponent,
    AboutComponent,
    ContactComponent,
    NavAComponent,
    NavBComponent,
    WhyComponent,
    RegisterComponent,
    FooterComponent,
    NavigationbarComponent,
    CouruselComponent,
    PopboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
