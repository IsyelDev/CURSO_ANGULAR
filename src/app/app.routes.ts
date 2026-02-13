import { EmployesDetails } from './../../../app-demo-standalone-v2/src/app/components/employes/employes-details/employes-details';
import { Routes } from '@angular/router';
import { EmployesList } from './componentes/employes/employes-list/employes-list';
import { CompanyList } from './componentes/company/company-list/company-list';

export const routes: Routes = [
{path:"empleado", component:EmployesList},
{path:"compania", component:CompanyList},
{path:"empleadoDetalle", component:EmployesDetails},
{path:'',redirectTo:"empleado",pathMatch:"full"}
];
