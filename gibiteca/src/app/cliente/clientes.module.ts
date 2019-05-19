import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component'
import { clientesRouting } from './clientes.routing';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@NgModule({
  imports: [CommonModule,clientesRouting,FormsModule],
  declarations: [ClienteComponent],
  providers: [ClienteService]
})

export class ClientesModule{ }