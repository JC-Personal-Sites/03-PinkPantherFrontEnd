import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';

import { UsersComponent } from '../../_users/users.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  title: string = 'The Pink Panther';
  faPaw = faPaw;
  faBars = faBars;

  constructor(public userModal: MatDialog) {}

  openUserModal() {
    this.userModal.open(UsersComponent);
  }
}
