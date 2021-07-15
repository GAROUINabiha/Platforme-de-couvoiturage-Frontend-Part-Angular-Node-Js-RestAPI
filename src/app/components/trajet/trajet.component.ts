import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { TrajetService } from 'src/app/service/trajet.service';

declare let $: any;
@Component({
  selector: 'app-trajet',
  templateUrl: './trajet.component.html',
  styleUrls: ['./trajet.component.scss']
})
export class TrajetComponent implements OnInit {
  id: number;
  trajet;
  thumbImages: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private trajetService: TrajetService,
    private router: Router ) { }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((param: ParamMap) => {
          // @ts-ignore
          return param.params.id;
        })
      )
      .subscribe(prodId => {
        this.id = prodId;
        this.trajetService.getSingle(this.id).subscribe(prod => {
          this.trajet = prod;
        });
      });
  }
  selectTrajet(email: String) {
this.router.navigate(['comment/' + email]).then(); }
}
