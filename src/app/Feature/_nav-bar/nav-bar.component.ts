import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
import { UsersComponent } from '../_users/users.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title: string = 'The Pink Panther';
  faPaw = faPaw;
  faBars = faBars;

  constructor(public userModal: MatDialog) {}

  ngOnInit(): void {}

  openUserModal() {
    this.userModal.open(UsersComponent);
  }
}
