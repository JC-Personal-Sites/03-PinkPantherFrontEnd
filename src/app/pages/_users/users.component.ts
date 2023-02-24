import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SignUpComponent } from './sign-up/sign-up.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  emailFormControl = new FormControl('', [Validators.required,Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor(public signUpModal: MatDialog) {}

  openSignUpModal() {
    this.signUpModal.open(SignUpComponent);
  }
}
