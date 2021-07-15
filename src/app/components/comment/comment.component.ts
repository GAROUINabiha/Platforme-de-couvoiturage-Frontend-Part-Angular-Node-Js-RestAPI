import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, FormControl, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { AvisService } from 'src/app/service/avis.service';
import { AvisModelServer, serverResponse1 } from 'src/app/models/avis.model';
declare let $: any;
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  email: string;
  ccForm: FormGroup;
  pubMessage: string;
  errorMessage: string;
  loading = false;
  constructor(
    private route: ActivatedRoute,
    private avisService: AvisService,
    private fb: FormBuilder, private router: Router) {
    this.ccForm = fb.group({
      pseudo: ['', [Validators.required]],
        comment: ['', [Validators.required]]
    });
     }
 avis: AvisModelServer[] = [];
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.email = params['email'];
      }
    );
    this.avisService.get2(this.email).subscribe((prod: serverResponse1) => {
      this.avis = prod.avis;
    });
  }
    comment() {
       this.route.params.subscribe(
      (params: Params) => {
        this.email = params['email'];

        console.log(this.email);
      }
    );
console.log(this.email);
const pseudo = this.ccForm.get('pseudo').value;
console.log(pseudo);
const comment = this.ccForm.get('comment').value;
    console.log(comment);
      const email = this.email;
  console.log(comment, pseudo, email);
      console.log(this.ccForm.value);
      if (this.ccForm.invalid) {
        return;
      }
      // @ts-ignore
      this.avisService.comment(comment, pseudo, email).subscribe((response: { message: string }) => {
        this.ccForm.reset();
        this.pubMessage = 'votre commentaire a été ajouté.';
        setTimeout(() => {
          this.pubMessage = null;
          this.router.navigate(['comment/' + email]).then();
        }, 3000);
      },
        data => {
          this.errorMessage = 'erreur';
          console.log(this.errorMessage);
          this.loading = false;
});
this.ccForm.reset();
}
}
