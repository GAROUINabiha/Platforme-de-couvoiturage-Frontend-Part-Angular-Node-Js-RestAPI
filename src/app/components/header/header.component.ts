import {Component, OnInit, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrajetModelServer } from '../../models/trajet.model';
export interface State {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  vdepart: string;
  varrive: string;
  date: string;
  loginMessage: string;
  message: string;
  sForm: FormGroup;
  loading = false;
  IsvalidForm = true;
  isSearch = false;
  states: State[] = [
    {value: 'Ariana', viewValue: 'Ariana'},
    {value: 'Beja', viewValue: 'Beja'},
    {value: 'Ben Arous', viewValue: 'Ben Arous'},
    {value: 'Bizerte', viewValue: 'Bizerte'},
    {value: 'Gabes', viewValue: 'Gabes'},
    {value: 'Gafsa', viewValue: 'Gafsa'},
    {value: 'Jandouba', viewValue: 'Jandouba'},
    {value: 'Kairouan', viewValue: 'Kairouan'},
    {value: 'Kasserine', viewValue: 'Kasserine'},
    {value: 'Kebili', viewValue: 'Kebili'},
    {value: 'Kef', viewValue: 'Kef'},
    {value: 'Mahdia', viewValue: 'Mahdia'},
    {value: 'Manouba', viewValue: 'Manouba'},
    {value: 'Mednine', viewValue: 'Mednine'},
    {value: 'Monastir', viewValue: 'Monastir'},
    {value: 'Nabeul', viewValue: 'Nabeul'},
    {value: 'Sousse', viewValue: 'Sousse'},
    {value: 'Seliana', viewValue: 'Seliana'},
    {value: 'Sfax', viewValue: 'Sfax'},
    {value: 'Sidi Bouzid', viewValue: 'Sidi Bouzid'},
    {value: 'Tataouine', viewValue: 'Tataouine'},
    {value: 'Tozeur', viewValue: 'Tozeur'},
    {value: 'Tunis', viewValue: 'Tunis'},
    {value: 'Zaghouan', viewValue: 'Zaghouan'}
  ];
  errorMessage = '';
  TrajetModelServer: TrajetModelServer[];
  constructor(private router: Router, private fb: FormBuilder
  ) {
    this.sForm = fb.group({
     vdepart: ['', [Validators.required]],
     varrive: ['', [Validators.required]],
      date: ['', [Validators.required]]
    }); }
  get formControls() {
    return this.sForm.controls;
  }
  ngOnInit(): void {
  }
s(data: any) {
console.log(data);
const vdepart = this.sForm.get('vdepart').value;
const varrive = this.sForm.get('varrive').value;
const date = this.sForm.get('date').value;
  this.router.navigate(['search/' + vdepart, varrive, date]).then();
}
}
