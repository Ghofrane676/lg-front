import { Component } from '@angular/core';
import gsap from 'gsap';
@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent {
  showFullText = false; // Variable pour gérer l'affichage du texte complet

  // Méthode pour basculer l'état de l'affichage du texte
  toggleText() {
    this.showFullText = !this.showFullText;
}
  ngOnInit(): void {
    // Utilisation de GSAP pour créer une animation "fly-in" pour h1
    gsap.from('.fly-in', {
      x: -800,
      opacity: 0,
      duration: 5, // Durée de l'animation en secondes
      ease: 'power4.out' // Type d'animation (facultatif)
    });

    // Utilisation de GSAP pour créer une animation "bounce" pour p
    gsap.from('.bounce', {
      y: -500,
      opacity: 0,
      duration: 5, // Durée de l'animation en secondes
      ease: 'elastic.out' // Type d'animation (facultatif)
    });
  }
  menuItems = [
    { Text: 'SUPPORT ADMINISTRATIF', iconName: 'assets/template 1 Asset 19mdpi.png', isActive: false },
    { Text: 'GESTION DES RESSOURCES HUMAINES', iconName: 'assets/template 1 Asset 18mdpi.png', isActive: false },

  ];
  toggleActive(item: any): void {
    item.isActive = !item.isActive;
  }
}