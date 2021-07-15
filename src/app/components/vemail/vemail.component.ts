import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {AlertService} from '../../service/alert.service';
@Component({
  selector: 'app-vemail',
  templateUrl: './vemail.component.html',
  styleUrls: ['./vemail.component.scss']
})
export class VemailComponent implements OnInit {
  RequestResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;
  message: string;
  loading = false;
  constructor( private userService: UserService,
              private router: Router, private alertService: AlertService
  ) {

  }

  ngOnInit() {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }

  RequestResetUser(form) {
    if (form.valid) {
      this.IsvalidForm = true;
      this.userService.requestReset(this.RequestResetForm.value).subscribe(
        (response: { message: string }) => {
          this.RequestResetForm.reset();
          this.successMessage = 'Réinitialiser le lien du mot de passe envoyé par e-mail avec succès.';
          setTimeout(() => {
            this.successMessage = null;
            const email = this.RequestResetForm.get('email').value;
            this.router.navigate(['uppass/' + email]).then();
          }, 3000);
        },
        data => {
          this.errorMessage = 'erreur' ;
          console.log(this.errorMessage);
          this.loading = false;
        });
      this.RequestResetForm.reset();
    }
}}
