import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './modules/acceuil/acceuil.component';
import { ProposComponent } from './modules/propos/propos.component';
import { ContactComponent } from './modules/contact/contact.component';
import { BlogComponent } from './modules/blog/blog.component';
import { DispositionComponent } from './modules/disposition/disposition.component';
import { ServiceComponent } from './modules/service/service.component';
import { EquipeComponent } from './equipe/equipe.component';
import { SupportComponent } from './support/support.component';
const routes: Routes = [
  { path:'', component: AcceuilComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'a-propos', component: ProposComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'mise-a-disposition', component: DispositionComponent },
  { path: 'services', component: ServiceComponent },
  {path: 'equipe', component: EquipeComponent },
  {path: 'support', component: SupportComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
