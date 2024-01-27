import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SigneUpComponent } from './signe-up/signe-up.component';
import {HttpClientModule} from "@angular/common/http";
import { TDComponent } from './td/td.component';
import { CoursComponent } from './cours/cours.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {CommonModule} from "@angular/common";
import { ListCoursComponent } from './list-cours/list-cours.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import { DetailsCoursComponent } from './details-cours/details-cours.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DashboardCoursComponent } from './dashboard-cours/dashboard-cours.component';
import { NevbarComponent } from './nevbar/nevbar.component';
import { LoginComponent } from './login/login.component';
import { DashausersComponent } from './dashausers/dashausers.component';



const ROUTES:Routes=[
                     //{ path: '', redirectTo: '/mescours', pathMatch: 'full' },
                     {path:'addCours',component:CoursComponent},
                     {path:'mescours',component:ListCoursComponent},
                     {path:'signe-up',component:SigneUpComponent},
                     {path:'sidebar',component:SidebarComponent},
                     {path:'cours/:id',component:DetailsCoursComponent},
                     {path:'dashboard',component:DashboardCoursComponent},
                     {path:'accueil',component:AccueilComponent},
                     {path:'home',component:HomeComponent},
                     {path:'nevbar',component:NevbarComponent},
                     {path:'login',component:LoginComponent},
                     {path:'dashuser',component:DashausersComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigneUpComponent,
    TDComponent,
    CoursComponent,
    SidebarComponent,
    FooterComponent,
    ListCoursComponent,
    DetailsCoursComponent,
    AccueilComponent,
    DashboardCoursComponent,
    NevbarComponent,
    LoginComponent,
    DashausersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatPaginatorModule ,
    MatTableModule
  ], exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
