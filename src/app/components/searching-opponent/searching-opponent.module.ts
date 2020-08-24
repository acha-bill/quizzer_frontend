import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingOpponentComponent } from './searching-opponent.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchingOpponentComponent
  }
];


@NgModule({
  declarations: [SearchingOpponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class SearchingOpponentModule { }
