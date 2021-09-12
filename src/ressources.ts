import {Injectable} from '@angular/core';

@Injectable()
export class Ressources {
    //NAVIGATION
    cfm : String = "CFM"
    contactsLink : String = "Contacts"
    addUpdateLink : String = "Ajouter un contact"

    //HOME VIEW
    titleContent : String = "Réalisation d'un écran de saisie type carnet d'adresse et un écran de visualisation"
    usedLibraries : String ="Les librairies utilisées sont :"
    angularLibrairy : String = "Angular CLI : 12.2.4"
    materialDesignLibrairy : String = "Material Design"
    reactiveForms : String = "Reactive Form"

    //Contact-List
    
    backgroundImageUrl : String = "~/assets/images/contact.jpg"
    header : String = 'CFM'
    title : String = 'Gestion de la liste des contacts'
    birthDate : String = "Date de naissance :"
    phone : String = "Télèphone :"
    adress : String = "Adresse :"
    adressType : String = "Type d'adresse :"
    addressCountry : String = "Pays :"
    addressCity : String = " Ville :"
    remark : String = "Commentaire :"
    modifyButton : String = "Modifier"
    deletButton : String = "Supprimer"


    //Add contact
    contactTitle : String = "Carnet d'adresse du contact"
    placeholderFirstName : String = "Prénom"
    firstNameRequiredValidation : String = "Le prénom est requis"
    firstNameMinlengthValidation : String = "Le prénom doit comporter au moins 3 caractères"
    placeholderLastName : String = "Nom de famille"
    lastNameRequiredValidation : String = "Le nom est requis"
    placeholderBirthDate : String = "Date de naissance"
    phonePlaceholder : String = "Numéro de téléphone"
    phoneRequiredValidation : String = "Le numéro de télèphone est requis"
    phonePatternValidation : String = "Veuillez vérifier votre saisie"
    addressLabel : String = "Choisisez le type de votre adresse"
    addressHomeValue : String = "Domicile"
    addressWorkValue : String = "Travail"
    streetNumberPlaceholder : String = "Numéro de rue"
    streetPlaceholder : String = "Rue"
    cityPlaceholder : String = "Ville"
    postalCodePlacholder : String = "Code postale"
    countryPlaceholder : String = "Pays"
    remarkPlaceholder : String = "Commentaire"
    saveButton : String = "Sauvegarder"

    // getFormContact() {
    //   let inputsContactValue = []
    //   for (let i = 1; i <= 9; i++) {
    //     const inputContactValue = {
    //       contactTitle :eval('this.contactTitle' +i),
    //       placeholderName: eval('this.placeholder' + i),
    //       requiredValidation: eval('this.requiredValidation'+ i),
    //       minlengthValidation: eval('this.minlengthValidation'),
    //       patternValidation: eval('this.patternValidation'),
    //       addressLabel: eval('this.addressLabel'),
    //       addressValue : eval('this.addressValue' + i),
    //       saveButton :eval('this.saveButton')
    //     }
    //     inputsContactValue.push(inputContactValue)
    //   }
    //   return inputsContactValue
    // }
}