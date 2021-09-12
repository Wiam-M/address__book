import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactDataBaseService implements InMemoryDbService {
  createDb(): Record<string, Contact[]> {
    const contacts: Contact[]= [
      { id: 1, firstName: 'Wiam',lastName : 'Malek',birthDate: "02-06-1995", phone : '06622569471' , address : { workHomeAddress:'Travail',streetNumber: 46, street:'Quai de Loire', city:'Paris', postalCode: 75019, country:'France', remark:"This is a contact card test"}},
    ];
    return {contacts};
  }
  genId(contacts: Contact[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  }
}