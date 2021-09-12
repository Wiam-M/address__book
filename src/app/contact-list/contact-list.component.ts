import { Component, OnInit } from '@angular/core';
import {Contact} from '../model/contact';
import {ContactService} from '../contact.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import {Ressources} from '../../ressources';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [Ressources]
})
export class ContactListComponent implements OnInit {
  textAlign = "center";
  backgroundImageUrl = this.ressources.backgroundImageUrl
  header = this.ressources.header
  title = this.ressources.title
  birthDate = this.ressources.birthDate
  phone = this.ressources.phone
  adress = this.ressources.adress
  adressType = this.ressources.adressType
  addressCountry = this.ressources.addressCountry
  addressCity = this.ressources.addressCity
  remark = this.ressources.remark
  modifyButton = this.ressources.modifyButton
  deletButton = this.ressources.deletButton

  contacts : Contact[] = [];

  constructor( private contactService : ContactService , private ressources :Ressources) { }

  ngOnInit(): void {
    this.getContacts();
    console.log(this.contacts)
  }

  getContacts(): void {
     this.contactService.getContacts().subscribe((data : any[])=>{
      console.log(data);
      this.contacts = data;
    })
  }
 
  delete(contact: Contact): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactService.deleteContact(contact.id).subscribe();
  }
}
