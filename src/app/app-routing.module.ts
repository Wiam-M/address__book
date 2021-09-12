import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddContactComponent} from './add-contact/add-contact.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import { HomeViewComponent } from './home-view/home-view.component';


const routes: Routes = [
  { path: 'contacts/:id', component: AddContactComponent },
  { path: 'contacts', component: ContactListComponent},
  {path: '', component: HomeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
