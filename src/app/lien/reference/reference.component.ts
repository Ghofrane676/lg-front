import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {
  @ViewChild('scrollContainer', { static: true }) scrollContainer: ElementRef;
  private scrollAmount: number = 200;
  clients = [
    { name: 'Client 1', logo: 'assets/template 1 Asset 44mdpi.png' },
    { name: 'Client 2', logo: 'assets/template 1 Asset 45mdpi.png' },
    { name: 'Client 3', logo: 'assets/template 1 Asset 47mdpi.png' },
    { name: 'Client 4', logo: 'assets/template 1 Asset 48mdpi.png' },

  ];
  activeClientIndex: number = 0; // Assurez-vous que cette propriété est bien déclarée

  constructor() {
    this.scrollContainer = new ElementRef(null);
  }

  scroll(direction: number): void {
    if (this.scrollContainer) {
      this.scrollContainer.nativeElement.scrollLeft += direction * this.scrollAmount;
    }
  }

  scrollToIndex(index: number): void {
    this.activeClientIndex = index;
    const container = this.scrollContainer.nativeElement;
    container.scrollLeft = index * this.scrollAmount;
  }
}