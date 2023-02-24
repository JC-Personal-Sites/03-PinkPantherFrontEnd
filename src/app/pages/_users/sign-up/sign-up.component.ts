import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  emailSignUpFormControl = new FormControl('', [Validators.required,Validators.email]);
  passwordSignUpFormControl = new FormControl('', [Validators.required]);
}
