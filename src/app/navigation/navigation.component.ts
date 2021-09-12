import { Component, OnInit } from '@angular/core';
import {Ressources} from '../../ressources';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  providers: [Ressources]
})
export class NavigationComponent implements OnInit {
  contactsLink = this.ressources.contactsLink
  addUpdateLink = this.ressources.addUpdateLink
  cfm = this.ressources.cfm
  constructor(private ressources :Ressources) { }

  ngOnInit(): void {
  }

}
