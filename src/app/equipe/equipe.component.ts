import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent {
  menuItems = [
    { Text: 'COMPTABILITÉ ET FINANCE', iconName: 'assets/Asset10.png', isActive: false },
    { Text: 'INGÉNIERIE', iconName: 'assets/Asset9.png', isActive: false },
    { Text: 'SECRÉTARIAT', iconName: 'assets/Asset8.png', isActive: false },
    
  ];

}
