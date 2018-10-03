import { Component, OnInit } from '@angular/core';
import {BiodataService} from '../biodata.service'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public date;
  public showBiodata=[];
  constructor(private biodataservice:BiodataService) { }

  ngOnInit() {

    this.biodataservice.biodata()
    .subscribe(Data=> this.showBiodata=Data);
  }









}
