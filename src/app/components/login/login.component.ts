import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  email: string;
  password: string;
  loginMessage: string;
  message: string;
  loginForm: FormGroup;
  loading = false;
  IsvalidForm = true;


  constructor(
              private router: Router,
              private userService: UserService, private fb: FormBuilder
           ) {
    this.loginForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    // redirect to home if already logged in


  }


  get formControls() {
    return this.loginForm.controls;
  }


  ngOnInit(): void {

  }




  Login1(form) {
     if (form.valid) {
      this.IsvalidForm = true;
      this.userService.Login1(this.loginForm.value).subscribe(
        (response: { message: string }) => {
          this.loginForm.reset();
          this.successMessage = 'vous pouvez publier vos trajets.';
            this.successMessage = null;
            this.router.navigate(['/pubtrajet']);
        },
        data => {
          this.errorMessage = 'Adresse e-mail ou mot de passe incorrect' ;
          console.log(this.errorMessage);
          this.loading = false;
        });
      this.loginForm.reset();
    }
}
    }
