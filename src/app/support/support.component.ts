import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  menuItems = [
    { Text: 'GESTION DE LA PAIE', iconName: 'assets/Asset6.png', isActive: false },
    { Text: 'GESTION DES RESSOURCES HUMAINES', iconName: 'assets/asset7.png', isActive: false },
    { Text: 'SUPPORT ADMINISTRATIF', iconName: 'assets/asset4.png', isActive: false },
    { Text: 'SUPPORT INFORMATIQUE', iconName: 'assets/asset3.png', isActive: false },
  ];

}
