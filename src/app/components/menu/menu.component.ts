import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuVisible = false;
  isMenuVisible2 = false;
  isMenuVisible3 = false;

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
  toggleMenu2() {
    this.isMenuVisible2 = !this.isMenuVisible2;
  }
  toggleMenu3() {
    this.isMenuVisible3 = !this.isMenuVisible3;
  }
  
  getHeight(menuNumber: number): number {
    switch (menuNumber) {
      case 1:
        return this.isMenuVisible ? 90 : 0;
      case 2:
        return this.isMenuVisible2 ? 90 : 0;
      case 3:
        return this.isMenuVisible3 ? 90 : 0;
      default:
        return 0;
    }
  }

}
