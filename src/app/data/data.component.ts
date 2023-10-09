import { Component, Input } from '@angular/core';
import { Datas } from '../data.model';
import { DataService } from '../data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  @Input()datas?:Datas;
  @Input()index:number=0;

    constructor(private dataservice:DataService,private router:Router){}

    editButton(){
      this.router.navigate(['/data-edit',this.index]);
    }
    deleteButton(){
      this.dataservice.deleteData(this.index);
    }
}
