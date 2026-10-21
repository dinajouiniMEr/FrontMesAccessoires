import { Component, OnInit } from '@angular/core';
import { accessoire } from '../model/accessoire.model';
import { ActivatedRoute } from '@angular/router';
import { Accessoire } from '../services/accessoire';
import { FormsModule } from '@angular/forms';
import {DatePipe}  from "@angular/common"


@Component({
  imports: [FormsModule,DatePipe],
  selector: 'app-update-accessoire',
  styles: ``,
  templateUrl: './update-accessoire.html',
})
export class UpdateAccessoire implements OnInit {

  currentAccessoire!: accessoire;

  constructor(private activatedRoute: ActivatedRoute,
    private accessoireService: Accessoire) {

  }

  ngOnInit(): void {
    this.currentAccessoire = this.accessoireService.consulterAccessoire(this.activatedRoute.snapshot.
      params['id']);
    console.log(this.currentAccessoire);
  }

  updateAccessoire(accs: accessoire = this.currentAccessoire) {
    const index = this.accessoireService.accessoires.indexOf(accs, 0);
    if (index > -1) {
      this.accessoireService.accessoires.splice(index, 1); //supprimer l'ancien éléments
      this.accessoireService.accessoires.splice(index, 0, accs); // insérer le nouvel élément
    }
  }


  
}
