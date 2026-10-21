import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { accessoire } from '../model/accessoire.model';
import { Accessoire } from '../services/accessoire';

@Component({
  imports: [FormsModule],
  selector: 'app-add-accessoire',
  styleUrl: './add-accessoire.css',
  templateUrl: './add-accessoire.html',
})
export class AddAccessoire {
  newAccessoire: accessoire = {};
  message = '';

  constructor(private accessoireService: Accessoire) {}

  addAccessoire() {
    this.accessoireService.ajouterAccessoire(this.newAccessoire);
    this.message = `Produit : ${this.newAccessoire.nomAccessoire} est ajouté avec succès !`;
  }
}
