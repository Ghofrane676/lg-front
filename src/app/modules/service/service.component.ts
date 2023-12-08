import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})

export class ServiceComponent  {

  menuItems = [
    { Text: 'SUPPORT ADMINISTRATIF', iconName: 'assets/template 2Asset 9mdpi.png', isActive: false },
    { Text: 'GESTION DES RESSOURCES HUMAINES', iconName: 'assets/template 2Asset 6mdpi.png', isActive: false },

  ];
}