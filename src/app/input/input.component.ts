import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  constructor(private _appComponent : AppComponent) { }

  ngOnInit() {
  }

  tambahkan(){
   this._appComponent.addNamaJurusan(this.jurusan);
   this._appComponent.addPenjelasan(this.penjelasan);

   alert(this.jurusan +" berhasil ditambahkan")

   console.log(this._appComponent.namaJurusan);
   console.log(this._appComponent.penjelasan);
  }

}