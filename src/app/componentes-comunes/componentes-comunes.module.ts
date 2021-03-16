import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { PrintErrorComponent } from './print-error/print-error.component';



@NgModule({
  declarations: [HeaderComponent, PrintErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    PrintErrorComponent
  ]
})
export class ComponentesComunesModule { }
