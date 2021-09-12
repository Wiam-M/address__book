import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl,FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Contact} from '../model/contact';
import {ContactService} from '../contact.service';
import { Location } from '@angular/common';
import {Ressources} from '../../ressources';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
  providers: [Ressources]
})
export class AddContactComponent implements OnInit {
  editmode = false;
  contactTitle = this.ressources.contactTitle
  placeholderFirstName = this.ressources.placeholderFirstName
  firstNameRequiredValidation = this.ressources.firstNameRequiredValidation
  firstNameMinlengthValidation = this.ressources.firstNameMinlengthValidation
  placeholderLastName = this.ressources.placeholderLastName
  lastNameRequiredValidation = this.ressources.lastNameRequiredValidation
  placeholderBirthDate = this.ressources.placeholderBirthDate
  phonePlaceholder = this.ressources.phonePlaceholder
  phoneRequiredValidation = this.ressources.phoneRequiredValidation
  phonePatternValidation = this.ressources.phonePatternValidation
  addressLabel = this.ressources.addressLabel
  addressHomeValue = this.ressources.addressHomeValue
  addressWorkValue = this.ressources.addressWorkValue
  streetNumberPlaceholder = this.ressources.streetNumberPlaceholder
  streetPlaceholder = this.ressources.streetPlaceholder
  cityPlaceholder = this.ressources.cityPlaceholder
  postalCodePlacholder = this.ressources.postalCodePlacholder
  countryPlaceholder = this.ressources.countryPlaceholder
  remarkPlaceholder = this.ressources.remarkPlaceholder
  saveButton = this.ressources.saveButton

  phoneRegex : RegExp = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
  contactId = (this.route.snapshot.paramMap.get("id"))
  contacts : Contact [] =[];
 
  constructor( private fb: FormBuilder, private contactService : ContactService, private router: Router, private route: ActivatedRoute, private ressources :Ressources) { }

  contactForm = this.fb.group({
    firstName : ['',[Validators.required, Validators.minLength(3)]],
    lastName : [''],
    birthDate : [''],
    phone : ['',[Validators.required, Validators.pattern(this.phoneRegex)]],
    address: this.fb.group({
      workHomeAddress : ['', Validators.required],
      streetNumber : [''],
      street : [''],
      city : [''],
      postalCode : [''],
      country : [''],
      remark : ['',[Validators.maxLength(50)]]
    })
  })
  get firstName() {
    return this.contactForm.get('firstName') as FormControl   }
  get lastName() {
    return this.contactForm.get('lastName') as FormControl;
  }
  get phone() {
    return this.contactForm.get('phone') as FormControl;
  }
  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id")
    console.log("this is my route id" + id);
    if (id != null && id != ''){
      this.editmode = true
      console.log ("id before parse :" + id)
      console.log ("id with parse :" + parseInt(id))
      this.getSelectedContact(parseInt(id))
    }
  } 
  public getSelectedContact(id: number): void {
    this.contactService.getContactById(id).subscribe(
      data => {
        this.updateContactFromFields(data);
      },
      error => console.log(error),
    );
  }
  private updateContactFromFields(data: Contact) {
    console.log(data);
    this.contactForm.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      birthDate: data.birthDate,
      address: data.address
    });
  }
  public onSubmit(): void{
    let contactId = (this.route.snapshot.paramMap.get("id"))
    if (!contactId) {
      let contact = new Contact(
        this.contactForm.get('id')?.value,
        this.contactForm.get('firstName')?.value ,
        this.contactForm.get('lastName')?.value ,
        this.contactForm.get('birthDate')?.value,
        this.contactForm.get('phone')?.value, 
        this.contactForm.get('address')?.value,
        )
        this.contactService.addContact(contact).subscribe(
          data => console.log(data),
          error => error
        );
        this.router.navigateByUrl('/contacts');
    }
    if(contactId){
      let contact = new Contact(
        parseInt(contactId),
        this.contactForm.get('firstName')?.value ,
        this.contactForm.get('lastName')?.value ,
        this.contactForm.get('birthDate')?.value,
        this.contactForm.get('phone')?.value, 
        this.contactForm.get('address')?.value,
        )
        this.contactService.updateContact(contact).subscribe(
          data => console.log(data),
        error => error);
      }
      this.router.navigateByUrl('/contacts');
    } 
}
  
  

  

