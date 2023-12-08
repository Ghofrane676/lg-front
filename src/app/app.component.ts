import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  excludeComponent = false; // Par défaut, n'exclut pas la composante

  // Logique pour exclure la composante au besoin
  someFunction() {
    // ...
    this.excludeComponent = true; // Exclut la composante
  }
}
