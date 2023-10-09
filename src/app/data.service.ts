import { Injectable } from '@angular/core';
import { Datas } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  listofdata:Datas[]=[
    new Datas('nike','air max',1239,'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1247bf75-da35-455f-9dce-7cd9b4526a95/air-max-pulse-shoes-2bZSZV.png','available'),
    new Datas('nike','air max 2',1239,'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1247bf75-da35-455f-9dce-7cd9b4526a95/air-max-pulse-shoes-2bZSZV.png','out of stock'),
  ];

  getData(){
    return this.listofdata;
  }
  addData(datas:Datas){
    this.listofdata.push(datas);
  }
  deleteData(index:number){
    this.listofdata.splice(index,1)
  }
  editData(index:number,datas:Datas){
    this.listofdata[index]=datas;
  }
  getSpecData(index:number){
    return this.listofdata[index]
  }
}
