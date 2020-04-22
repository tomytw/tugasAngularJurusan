import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Tomy';

  constructor(private router : Router) {}

  namaJurusan = [];
  penjelasan = [];

  addNamaJurusan(namaJur){
    this.namaJurusan.push(namaJur);
  }

  addPenjelasan(pen){
    this.penjelasan.push(pen);
  }


}
