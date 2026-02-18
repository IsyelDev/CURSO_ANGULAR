import { CompanyService } from './../../../services/company-service';
import { Component , AfterViewInit, signal, inject} from '@angular/core';
import DataTable from 'datatables.net';
import { Company } from '../../../model/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [],
  templateUrl: './company-list.html',
  styleUrl: './company-list.css',
})
export class CompanyList implements AfterViewInit{
    ngAfterViewInit(): void {
    // Inicializa DataTable cuando el DOM ya está renderizado
    new DataTable('#myTable', {
      //responsive: true
    });
  }

private router = inject(Router);

  company1 = signal<string>("papu");
  contact1 = signal<string>("Elmer delaPazd");
  country1 = signal<string>("Peru");



  datos:Array<Company>=[]

  constructor(private companyService:CompanyService){
    this.company1.set("Isyel")
    this.country1.set("Bolivia")
    this.datos = companyService.getAll()
  }


total(){
   return this.datos.length??0
}

changeValue() {
  this.datos = this.datos.map(item =>{
    if(item.contact ==="Roland Mendel"){
      return{...item,contact:"Isabel Campos"}
    }
      if (item.contact === "Isabel Campos") {
      return { ...item, contact: "Roland Mendel" };
    }

    return item;
  });
}


new(){

}

getall(){

}


}
