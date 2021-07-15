import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import {TrajetModelServer, serverResponse} from '../../models/trajet.model';
import { TrajetService } from 'src/app/service/trajet.service';

declare let $: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  vdepart: string;
  varrive: string;
  date: string;
  constructor(
    private route: ActivatedRoute,
    private trajetService: TrajetService,
    private router: Router) { }
  trajet: TrajetModelServer[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.vdepart = params['vdepart'];
        this.varrive = params['varrive'];
       this.date = params['date'];
        console.log(this.vdepart);
      }
    );
       this.trajetService.get1(this.vdepart, this.varrive, this.date).subscribe((prod: serverResponse) => {
        this.trajet = prod.trajet;
       });
  }
selectTrajet(id: Number) {
this.router.navigate(['trajet/' + id]).then();
}
}
