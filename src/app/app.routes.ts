import { EmployesDetails } from './../../../app-demo-standalone-v2/src/app/components/employes/employes-details/employes-details';
import { Routes } from '@angular/router';
import { EmployesList } from './componentes/employes/employes-list/employes-list';
import { CompanyList } from './componentes/company/company-list/company-list';

export const routes: Routes = [
{path:"employees", component:EmployesList},
{path:"company", component:CompanyList},
{path:"employesDetails", component:EmployesDetails},
{path:'',redirectTo:"employees",pathMatch:"full"}
];
