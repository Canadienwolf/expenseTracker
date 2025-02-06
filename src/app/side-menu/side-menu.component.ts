import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink
],
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  constructor() { }

darkModeEnabled = false;

  ngOnInit(): void { }

  toggleDarkMode(): void {
    console.log('toggleDarkMode');
    document.body.classList.toggle('dark-theme');
  }
}



