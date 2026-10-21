import { Injectable } from '@angular/core';
import { accessoire } from '../model/accessoire.model';


@Injectable({
  providedIn: 'root',
})
export class Accessoire {
  accessoires: accessoire[];


  constructor() {
    console.log("Creation du service Accessoire!")
    this.accessoires = [
      {
        idAccessoire: 1,
        nomAccessoire: 'Matrix Ring',
        prixAccessoire: 139.99,
        dateCreation: new Date('2026-10-05'),
        type: 'bague',
      },
      {
        idAccessoire: 6,
        nomAccessoire: 'Mayfair Bas Relief Pendant Necklace',
        prixAccessoire: 125,
        dateCreation: new Date('2026-11-10'),
        type: 'collier',
      },
      {
        idAccessoire: 7,
        nomAccessoire: 'Mother Orb Watch',
        prixAccessoire: 300,
        dateCreation: new Date('2026-11-10'),
        type: 'montre',
      }];
  }

  listerAccessoires(): accessoire[] {
    return this.accessoires;
  }

  ajouterAccessoire(accs: accessoire) {
    this.accessoires.push(accs);
  }

  supprimerAccessoire(accs: accessoire) {
    const index = this.accessoires.indexOf(accs, 0);
    if (index != -1) {
      this.accessoires.splice(index, 1);
    }
  }


  consulterAccessoire(id: number): accessoire {
     return this.accessoires.find(a => a.idAccessoire == id)!;
    
  }
}
