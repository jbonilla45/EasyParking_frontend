import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Operador } from '../../operadorModels/operador';

@Component({
  selector: 'app-crear-operador',
  templateUrl: './crear-operador.component.html',
  styleUrls: ['./crear-operador.component.css']
})
export class CrearOperadorComponent implements OnInit {
  operadorForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.operadorForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cargo: ['', ]
    })
  }

  ngOnInit(): void {
  }

  guardarOperador(){
    console.log(this.operadorForm)
    const OPERADOR : Operador= {
      nombre: this.operadorForm.get('nombre')?.value,
      apellido: this.operadorForm.get('apellido')?.value,
      cargo: this.operadorForm.get('cargo')?.value,
    }
    console.log(OPERADOR);
    this.toastr.success('El Operador fué registrado exitosamente!', 'Operador Registrado');
    this.router.navigate(['/operador']);
  }
}
