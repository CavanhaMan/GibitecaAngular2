import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GibiComponent } from './gibi.component'
import { gibisRouting } from './gibis.routing';
import { FormsModule } from '@angular/forms';
import { GibisService } from './gibis.service';
import { GibiFormComponent } from './gibi-form/gibi-form.component';

@NgModule({
  imports: [CommonModule,gibisRouting,FormsModule],
  declarations: [GibiComponent, GibiFormComponent],
  providers: [GibisService]
})

export class GibisModule{ }