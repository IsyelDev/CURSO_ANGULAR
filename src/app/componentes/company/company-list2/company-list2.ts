import { Component , AfterViewInit, signal} from '@angular/core';
import DataTable from 'datatables.net';
@Component({
  selector: 'app-company-list',
  imports: [],
  template: `<p>company-list works!</p>
<h2>Mi tabla Numero 2</h2>
<button (click)="changeValue()">Isabel</button>
<table id="myTable" class="display stripe hover center">
  <thead>
   <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  </thead>
  <tbody>
@for ( datito of data; track $index) {
  <tr>
    <td>{{datito.company}}</td>
    <td>{{datito.contact}}</td>
    <td>{{datito.country}}</td>
  </tr>
}

</tbody>
</table>
<h1>Total {{total()}}</h1>
`,
  styles: `table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dae6df;
  text-align: left;
  padding: 8px;
  color: green;
}
tr:nth-child(even) {
  background-color: #bb1818;
}
`,
})

export class CompanyList2 implements AfterViewInit{
    ngAfterViewInit(): void {
    // Inicializa DataTable cuando el DOM ya está renderizado
    new DataTable('#myTable', {
      //responsive: true
    });
  }

data =
[
  {
    "company": "Ernst Handel",
    "contact": "Roland Mendel",
    "country": "Austria",
    "Money":"MXD"
  },
  {
    "company": "Island Trading",
    "contact": "Helen Bennett",
    "country": "UK",
    "Money":"USD"
  },
  {
    "company": "Laughing Bacchus Winecellars",
    "contact": "Yoshi Tannamuri",
    "country": "Canada"
  },
  {
    "company": "Magazzini Alimentari Riuniti",
    "contact": "Giovanni Rovelli",
    "country": "Italy"
  },
  {
    "company": "North/South",
    "contact": "Simon Crowther",
    "country": "UK"
  },
  {
    "company": "Paris spécialités",
    "contact": "Marie Bertrand",
    "country": "France"
  },
  {
    "company": "Rattlesnake Canyon Grocery",
    "contact": "Paula Wilson",
    "country": "USA"
  },
  {
    "company": "Simons bistro",
    "contact": "Jytte Petersen",
    "country": "Denmark"
  },
  {
    "company": "The Big Cheese",
    "contact": "Liz Nixon",
    "country": "USA"
  },
  {
    "company": "Vaffeljernet",
    "contact": "Palle Ibsen",
    "country": "Norway"
  },
  {
    "company": "Wolski Zajazd",
    "contact": "Zbyszek Piestrzeniewicz",
    "country": "Poland"
  },
  {
    "company": "Bon app'",
    "contact": "Laurence Lebihan",
    "country": "France"
  },
  {
    "company": "Blauer See Delikatessen",
    "contact": "Hanna Moos",
    "country": "Germany"
  },
  {
    "company": "Drachenblut Delikatessend",
    "contact": "Peter Franken",
    "country": "Germany"
  },
  {
    "company": "Frankenversand",
    "contact": "Martin Sommer",
    "country": "Germany"
  },
  {
    "company": "Furia Bacalhau e Frutos do Mar",
    "contact": "Lino Rodriguez",
    "country": "Brazil"
  },
  {
    "company": "Godos Cocina Típica",
    "contact": "José Pedro Freyre",
    "country": "Spain"
  },
  {
    "company": "Hungry Owl All-Night Grocers",
    "contact": "Patricio Simpson",
    "country": "Argentina"
  },
  {
    "company": "Hungry Owl All-Night Grocers",
    "contact": "Patricio Simpson",
    "country": "Argentina"
  }
]

total(){
   return this.data.length??0
}

changeValue() {
  this.data = this.data.map(item =>{
    if(item.contact ==="Roland Mendel"){
      return{...item,contact:"Isabel Campos"}
    }
      if (item.contact === "Isabel Campos") {
      return { ...item, contact: "Roland Mendel" };
    }

    return item;
  });
}

}
