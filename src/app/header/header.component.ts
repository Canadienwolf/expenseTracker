import { Component } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [
    SideMenuComponent,
    NgbModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;
}
