import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component'
import { clientesRouting } from './clientes.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,clientesRouting,FormsModule],
  declarations: [ClienteComponent]
})

export class ClientesModule{ }