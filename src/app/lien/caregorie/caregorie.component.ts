import { Component } from '@angular/core';

@Component({
  selector: 'app-caregorie',
  templateUrl: './caregorie.component.html',
  styleUrls: ['./caregorie.component.scss']
})
export class CaregorieComponent {
  menuItems = [
    {
      id: 1,
      title: 'Titre de l\'actualité 1',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
    {
      id: 2,
      title: 'Titre de l\'actualité 2',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
    {
      id: 3,
      title: 'Titre de l\'actualité 1',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
    {
      id: 4,
      title: 'Titre de l\'actualité 1',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
    {
      id: 5,
      title: 'Titre de l\'actualité 1',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
    {
      id: 6,
      title: 'Titre de l\'actualité 1',
      imageSrc: 'assets/img site-04.png',
      isActive: false,
      showImage: false
    },
  ];
}