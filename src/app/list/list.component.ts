import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _appComponent : AppComponent) { }

  penj = [];
  jur = []
  ngOnInit() {
    
  }

  isShow = false;
  hasil = [];
  i = 0;
  show(){
    this.hasil = [];
    this.penj = this._appComponent.penjelasan;
    this.jur = this._appComponent.namaJurusan;

    for(this.i = 0;this.i<this.jur.length;this.i++){
      let str ="Nama Jurusan : " + this.jur[this.i] +" , Penjelasan : "+this.penj[this.i];  
      this.hasil.push(str);
    }
    
    this.isShow = true;
  }


}