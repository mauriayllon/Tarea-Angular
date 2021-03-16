import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClaseDto } from 'src/app/dto/clase.dto';
import { ApiBackendService } from '../../providers/api-backend.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public lstDtoClase: Array<ClaseDto> = [];
  public clase: ClaseDto = <ClaseDto>{}
  public nombre = '';
  public email = '';
  public myForm: FormGroup = <FormGroup>{}
  public miLista: string[] = [];

  constructor(
    public fb: FormBuilder,
    public api: ApiBackendService
  ) { }

  async ngOnInit() {

    this.iniciarValidaciones();
    this.obtenerEstudiantes();
  }
  async obtenerEstudiantes(){
    this.lstDtoClase = await this.api.get<Array<ClaseDto>>('/clase/listar').toPromise();
    console.log(this.lstDtoClase);
  }

  iniciarValidaciones() {
    this.myForm = this.fb.group({
      vCodigo: ['',[
        Validators.required
      ]],
      vTitulo: ['',[
        Validators.required,
      ]],
      vDescripcion: ['',[
        Validators.required,
      ]]
    })
  }
  get f(): any {return this.myForm.controls;}

  async guardar() {
    let insertado = await this.api.post<ClaseDto>('/clase',this.clase).toPromise();
    console.log(insertado);
    this.ngOnInit()
    window.alert('El dato ha sido registrado correctamente.' + insertado.idClase);
  }
}
