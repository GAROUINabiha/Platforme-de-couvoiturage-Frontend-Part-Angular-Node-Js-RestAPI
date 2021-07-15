import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { TrajetComponent } from 'src/app/components/trajet/trajet.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { PubtrajetComponent } from 'src/app/components/pubtrajet/pubtrajet.component';
import {VemailComponent} from './components/vemail/vemail.component';
import {UppassComponent} from './components/uppass/uppass.component';
import { SearchComponent } from './components/search/search.component';
import { CommentComponent } from './components/comment/comment.component';
// @ts-ignore
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'trajet/:id', component: TrajetComponent
  },

  {
    path: 'register', component: RegisterComponent
  },

  {
    path: 'login', component: LoginComponent
  }
  ,

  {
    path: 'pubtrajet', component: PubtrajetComponent
  }
  ,
  {
    path: 'vemail', component: VemailComponent
  }
  ,
  {
    path: 'uppass/:email', component: UppassComponent
  }
  ,
  {
    path: 'comment/:email', component: CommentComponent
  }
  ,
    {
      path: 'search/:vdepart/:varrive/:date', component: SearchComponent
  }
  ,
// Wildcard Route if no route is found == 404 NOTFOUND page
{
  path: '**', pathMatch: 'full', redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}