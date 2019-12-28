import { Component } from '@angular/core';
import { navItems4 } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems4;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
