import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-error',
  template: `
  <div class="error" *ngIf="control && control.errors && (control.dirty || control.touched)">
  <div *ngIf="control.errors.required"><small>El campo es requerido</small></div>
  <div *ngIf="control.errors.email"><small>El correo no cumple con el formato requerido.</small></div>
</div>
`,
  styleUrls: ['./print-error.component.scss']
})
export class PrintErrorComponent implements OnInit {

  @Input('control')
  control: any;

  constructor() { }

  ngOnInit(): void {
  }

}
