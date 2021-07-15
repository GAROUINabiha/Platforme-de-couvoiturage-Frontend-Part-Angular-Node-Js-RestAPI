import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-uppass',
  templateUrl: './uppass.component.html',
  styleUrls: ['./uppass.component.scss']
})
export class UppassComponent implements OnInit {
    email: string;
    upForm: FormGroup;
  // tslint:disable-next-line:max-line-length
  private emailPattern = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
  comparePassword: boolean;
  upMessage: string;
  errorMessage: string;
  successMessage: string;
  IsvalidForm = true;
  message: string;
  loading = false;
  CurrentState: any;
  IsResetFormValid = true;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.upForm = fb.group({
      pass: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    });
  }
  get formControls() {
    return this.upForm.controls;
  }
  ngOnInit(): void {
      this.upForm.valueChanges
      .pipe(map((controls) => {
        return this.formControls.cpassword.value === this.formControls.pass.value;
      }))
      .subscribe(passwordState => {
        console.log(passwordState);
        this.comparePassword = passwordState;
      });
      this.route.params.subscribe(
        (params: Params) => {
          this.email = params['email'];
          console.log(this.email);
        }
      );



  }
  newpass(form) {
    if (form.valid) {
      this.IsResetFormValid = true;
    // @ts-ignore
    this.userService.newpass({...this.upForm}).subscribe(
      data => {
        this.upForm.reset();
        this.successMessage = data.message;
        setTimeout(() => {
          this.successMessage = null;
            this.router.navigate(['/login']);
        }, 4000);
      },
      err => {
        if (err.error.message) {
          this.errorMessage = err.error.message;
        }
      }
    );
    } else { this.IsResetFormValid = false; }
  }}

