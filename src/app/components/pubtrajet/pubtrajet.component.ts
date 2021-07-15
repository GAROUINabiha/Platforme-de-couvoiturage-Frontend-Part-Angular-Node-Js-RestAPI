import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import {TrajetService} from '../../service/trajet.service';
export interface State {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pubtrajet',
  templateUrl: './pubtrajet.component.html',
  styleUrls: ['./pubtrajet.component.scss']
})
export class PubtrajetComponent implements OnInit {

  pubForm: FormGroup;
  Data: Array<any> = [
    { name: 'Fumeur', value: 'Fumeur' },
    { name: 'Musique', value: 'Musique' },
    { name: 'Discussions', value: 'Discussions' },
    { name: 'Animaux domestiques', value: 'Animaux domestiques' },
    { name: 'Climatisation', value: 'Climatisation' }
  ];
  pubMessage: string;
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
  constructor(private fb: FormBuilder,
              private trajetService: TrajetService) {
    this.pubForm = fb.group({
        email: ['', [Validators.required]],
      vdepart: ['', [Validators.required]],
      varrive: ['', [Validators.required]],
      date: ['', [Validators.required]],
      heure: ['', [Validators.required]],
      nbrep: ['', [Validators.required]],
      tarif: ['', [Validators.required]],
      checkArray: this.fb.array([])
    });
  }
  onCheckboxChange(e) {
  const checkArray: FormArray = this.pubForm.get('checkArray') as FormArray;

  if (e.target.checked) {
    checkArray.push(new FormControl(e.target.value));
  } else {
    // tslint:disable-next-line:no-inferrable-types
    let i: number = 0;
    checkArray.controls.forEach((item: FormControl) => {
      if (item.value === e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }
}
  get formControls() {
    return this.pubForm.controls;
  }
  ngOnInit(): void {
  }
  pub() {
    console.log(this.pubForm.value);
    if (this.pubForm.invalid) {
      return;
    }
    // @ts-ignore
    this.trajetService.pub({...this.pubForm.value}).subscribe((response: { message: string }) => {
    this.pubMessage = response.message;
});
}
}
