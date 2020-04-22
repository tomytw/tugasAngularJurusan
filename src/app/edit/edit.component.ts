import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private _appComponent : AppComponent) { }

  hasil = [];
  i = 0;

  penj = [];
  jur = [];
  ngOnInit() {
    this.hasil = [];
    this.penj = this._appComponent.penjelasan;
    this.jur = this._appComponent.namaJurusan;

    for(this.i = 0;this.i<this.jur.length;this.i++){
      let str ="Nama Jurusan : " + this.jur[this.i] +" , Penjelasan : "+this.penj[this.i];  
      this.hasil.push(str);
    }
  }

  
  edit(i,edit){
    
  }

}