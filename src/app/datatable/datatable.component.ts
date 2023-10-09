import { Component } from '@angular/core';
import { Datas } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  listofdata:Datas[]=[];
    constructor(private dataservice:DataService){}

    ngOnInit():void{
      this.listofdata=this.dataservice.getData();
    }
}
