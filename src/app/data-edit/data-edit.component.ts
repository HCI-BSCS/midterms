import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Datas } from '../data.model';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.component.html',
  styleUrls: ['./data-edit.component.css']
})
export class DataEditComponent {
  
  form!:FormGroup;
  index:number=0;
  editmode=false;
  stats = [{'id':1, 'status':'out of stock'}, {'id':2, 'status': 'available'}, {'id':3, 'status': 'soon'}];
  brands = [{'id':1, 'brand':'Nike'}, {'id':2, 'brand': 'Adidas'}, {'id':3, 'brand': 'Puma'}];
  

    constructor(private dataservice:DataService, private router:Router, private actroute:ActivatedRoute){}
  
    ngOnInit():void{
      let model="";
      let brand="";
      let price:number=0;
      let img="";
      let status="";
         this.actroute.params.subscribe((params:Params)=>{
          if(params['index']){
            this.index=params['index'];
            const dataspec=this.dataservice.getSpecData(this.index);
            model=dataspec.model;
            brand=dataspec.brand;
            price=dataspec.price;
            img=dataspec.img;
            status=dataspec.status;
            this.editmode=true;
          }
         }
         );

         this.form= new FormGroup({
          brand:new FormControl(brand, [Validators.required]),
          model:new FormControl(model, [Validators.required]),
          img:new FormControl(img, [Validators.required]),
          price:new FormControl(price, [Validators.required]),
          status:new FormControl(status, [Validators.required]),
        });
      }

      
      onSubmit(){
        const id = crypto.randomUUID();
        const model= this.form.value.model;
        const brand= this.form.value.brand;
        const img= this.form.value.img;
        const price= this.form.value.price;
        const status= this.form.value.status;
        const data: Datas=new Datas(id,brand,model,price,img,status);
        if(this.editmode==true){
          this.dataservice.editData(this.index, data);
        }
        else{
          this.dataservice.addData(data);
        }
          this.router.navigate(['datatable']);
      }
    }
