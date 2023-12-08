import { Component } from '@angular/core';

@Component({
  selector: 'app-disposition',
  templateUrl: './disposition.component.html',
  styleUrls: ['./disposition.component.scss']
})
export class DispositionComponent {
  menuItems = [
    { Text: 'COMPTABILITÉ', iconName: 'assets/template 3Asset 5mdpi.png', isActive: true },
    { Text: 'INGÉNIERIE', iconName: 'assets/template 3Asset 8mdpi.png', isActive: false },

  ];
  toggleSection(index: number) {
    // Réinitialiser l'état "isActive" de tous les éléments du menu
    this.menuItems.forEach((item, i) => {
      item.isActive = (i === index);
    });
  }
}