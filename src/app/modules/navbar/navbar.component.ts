import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchTerm: string = '';
  isScrolled: boolean = false;
  servicesDropdownOpen: boolean = true;
  madDropdownOpen: boolean = true;
  toggleMADDropdown() {
    this.madDropdownOpen = !this.madDropdownOpen;
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cette fonction sera exécutée lorsqu'il y a un événement de défilement de la fenêtre
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  toggleServicesDropdown() {
    this.servicesDropdownOpen = !this.servicesDropdownOpen;
  }

  constructor(private router: Router) { }

  onSearch() {
    const searchMappings: { [key: string]: string } = {
      'support': '/support',
      'ressources humaines': '/support',
      'paie': '/support',
      'equipe': '/equipe',
      'acceuil': '/acceuil',
      'comptable': '/equipe',
      'développeur': '/equipe',
      'data analyst': '/equipe',
      'ingénieur': '/equipe',
      'assistante': '/equipe',
      'commerciale': '/equipe',
     };
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
    if (searchMappings.hasOwnProperty(lowerCaseSearchTerm)) {
      const destinationPath = searchMappings[lowerCaseSearchTerm];
      this.router.navigate([destinationPath]);
    } else {
      console.log(`No matching page found for search term: ${this.searchTerm}`);
    }
 }
}