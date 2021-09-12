import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MaterialModule} from './material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ContactDataBaseService } from './contactDataBase/in-memory-data.service';
import { HomeViewComponent } from './home-view/home-view.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AddContactComponent,
    ContactListComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    ContactDataBaseService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
