import { Component, OnInit } from '@angular/core';
import { accessoire } from '../model/accessoire.model';
import { Accessoire } from '../services/accessoire';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule,RouterLink],
  standalone: true,
  selector: 'app-acccessoires',
  styleUrl: './accessoires.css',
  templateUrl: './accessoires.html',
})
export class Acccessoires implements OnInit{
  accessoires: accessoire[]= [];

  constructor(private accessoireService: Accessoire) {
  }

  ngOnInit(): void {
    this.accessoires = this.accessoireService.listerAccessoires();
  }

  supprimerAccessoire(accs : accessoire){
    //console.log(accs);
    let conf = confirm("est vous sur?");
    if(conf)
    this.accessoireService.supprimerAccessoire(accs);
  }

}
