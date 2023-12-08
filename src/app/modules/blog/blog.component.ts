import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  menuItems = [
    { imageSrc: '/assets/tv.jpeg', title: 'Téléviseurs' , link:'/electromenager', isActive: false},
    { imageSrc: '/assets/elec.jpeg', title: 'Électroménagers',link:'', isActive: false },
    { imageSrc: '/assets/tel.jpeg', title: 'Téléphonie mobile',link:'/telephone', isActive: false },
    { imageSrc: '/assets/sys.jpeg', title: 'Systèmes audio',link:'/', isActive: false },
    { imageSrc: '/assets/pc.jpeg', title: 'Informatique',link:'/', isActive: false },
  ];
  toggleActive(item: any): void {
    item.isActive = !item.isActive;
  }
}
