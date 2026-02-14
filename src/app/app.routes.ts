import { Routes } from '@angular/router';
import { EmployesList } from './componentes/employes/employes-list/employes-list';
import { CompanyList } from './componentes/company/company-list/company-list';
import { EmployesDetails } from './componentes/employes/employes-details/employes-details';
import { PageNotFound } from './componentes/errores/page-not-found/page-not-found';

export const routes: Routes = [
{path:"empleado", component:EmployesList},
{path:"compania", component:CompanyList},
{path:"empleadoDetalle", component:EmployesDetails},
{path:"404", component:PageNotFound},
{path:'',redirectTo:"/empleado",pathMatch:"full"},
{path:'**',redirectTo:"/404",pathMatch:"full"}
];
