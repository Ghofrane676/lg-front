import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './modules/acceuil/acceuil.component';
import { ProposComponent } from './modules/propos/propos.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactComponent } from './modules/contact/contact.component';
import { DispositionComponent } from './modules/disposition/disposition.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { ServiceComponent } from './modules/service/service.component';
import { CaregorieComponent } from './lien/caregorie/caregorie.component';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms';
import { ContainercontactComponent } from './modules/containercontact/containercontact.component';
import { ReferenceComponent } from './lien/reference/reference.component';
import { ChiffreComponent } from './lien/chiffre/chiffre.component';
import { LienComponent } from './lien/lien/lien.component';
import { AtoutComponent } from './lien/atout/atout.component';
import { SupportComponent } from './support/support.component';
import { EquipeComponent } from './equipe/equipe.component';


@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ProposComponent,
    BlogComponent,
    ContactComponent,
    DispositionComponent,
    NavbarComponent,
    ServiceComponent,
    CaregorieComponent,
    ContainercontactComponent,
    ReferenceComponent,
    ChiffreComponent,
    LienComponent,
    AtoutComponent,
    SupportComponent,
    EquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
