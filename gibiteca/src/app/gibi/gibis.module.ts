import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GibiComponent } from './gibi.component'
import { gibisRouting } from './gibis.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule,gibisRouting,FormsModule],
  declarations: [GibiComponent]
})

export class GibisModule{ }