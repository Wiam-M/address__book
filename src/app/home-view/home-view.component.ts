import { Component, OnInit } from '@angular/core';
import {Ressources} from '../../ressources';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
  providers: [Ressources]
})
export class HomeViewComponent implements OnInit {
  titleContent = this.ressources.titleContent
  usedLibraries = this.ressources.usedLibraries
  angularLibrairy = this.ressources.angularLibrairy
  materialDesignLibrairy = this.ressources.materialDesignLibrairy
  reactiveForms = this.ressources.reactiveForms
  constructor(private ressources :Ressources) { }

  ngOnInit(): void {
  }

}
