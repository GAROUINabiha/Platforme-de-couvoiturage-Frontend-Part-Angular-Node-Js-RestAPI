import {Component, OnInit} from '@angular/core';
import {TrajetService} from '../../service/trajet.service';
import {Router} from '@angular/router';
import {TrajetModelServer, serverResponse} from '../../models/trajet.model';
import {UserService, ResponseModel, serverResponse1} from '../../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombren: number;
  nombrena: number;
constructor(private trajetService: TrajetService,
              private router: Router,
              private userService: UserService) { }
        trajet: TrajetModelServer[] = [];
        users: ResponseModel[] = [];
ngOnInit(): void {
    this.trajetService.getAllTrajet().subscribe((prods: serverResponse) => {
      this.trajet = prods.trajet;
});

  this.trajetService.getn().subscribe((response: { nombre: number }) => {
    this.nombren = response.nombre;
  });
  this.trajetService.getn1().subscribe((response: { nombre: number }) => {
    this.nombrena = response.nombre;
  });
}
selectTrajet(id: Number) {
this.router.navigate(['trajet/' + id]).then();
}
}
