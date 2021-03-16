import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EstudianteDto } from 'src/app/dto/estudiante.dto';
import { ApiBackendService } from '../../providers/api-backend.service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {
  public lstDtoEstudiante: Array<EstudianteDto> = [];
  public estudiante: EstudianteDto = <EstudianteDto>{}
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
    this.lstDtoEstudiante = await this.api.get<Array<EstudianteDto>>('/estudiante/listar').toPromise();
    console.log(this.lstDtoEstudiante);
  }

  iniciarValidaciones() {
    this.myForm = this.fb.group({
      vIdentificador: ['',[
        Validators.required
      ]],
      vNombre: ['',[
        Validators.required,
      ]],
      vApellido: ['',[
        Validators.required,
      ]]
    })
  }
  get f(): any {return this.myForm.controls;}

  async guardar() {
    let insertado = await this.api.post<EstudianteDto>('/estudiante',this.estudiante).toPromise();
    console.log(insertado);
    this.ngOnInit();
  }

}
