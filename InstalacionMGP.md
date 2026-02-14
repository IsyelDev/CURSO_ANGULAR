# Instalación de DataTables en Angular

## Instalar dependencias

```bash
npm install datatables.net datatables.net-dt datatables.net-responsive datatables.net-responsive-dt
```
# Instalación de DataTables en Angular

## Instalar dependencias

```bash
# Librería principal de DataTables (motor de la tabla)
npm install datatables.net \

# Estilos por defecto de DataTables
datatables.net-dt \

# Extensión para tablas responsivas
datatables.net-responsive \

# Estilos para la versión responsiva
datatables.net-responsive-dt
```

# Configuración y Uso de DataTables en Angular

## 1️⃣ Agregar estilos en angular.json

Editar `angular.json` → sección `"styles"`:

```json
"styles": [
  "src/styles.css",
  "node_modules/datatables.net-dt/css/dataTables.dataTables.min.css",
  "node_modules/datatables.net-responsive-dt/css/responsive.dataTables.min.css"
]
```
```bash
<table id="myTable" class="display">
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Juan</td>
      <td>juan@email.com</td>
    </tr>
  </tbody>
</table>
```
```bash
import { AfterViewInit, Component } from '@angular/core';
import DataTable from 'datatables.net';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html'
})
export class TablaComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    // Inicializa DataTable cuando el DOM ya está renderizado
    new DataTable('#myTable', {
      responsive: true
    });
  }
}
```
## Consideraciones

* Usar AfterViewInit porque la tabla debe existir en el DOM.
* El id debe coincidir entre HTML y TypeScript.
* Si los datos vienen de una API, inicializar después de cargarlos.
