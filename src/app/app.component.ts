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

  i = 0;
  edit(nama,penjelasan){
    // console.log(nama);
    // console.log(penjelasan);
    for(this.i = 0;this.i<this.namaJurusan.length;this.i++){
      if(this.namaJurusan[this.i] == nama){
        this.penjelasan[this.i] = penjelasan;
        alert("Penjelasan "+this.namaJurusan[this.i]+" berhasil di edit");
        return;
      }
    }

    alert("Jurusan "+ nama +" tidak ditemukan");

  }


}
