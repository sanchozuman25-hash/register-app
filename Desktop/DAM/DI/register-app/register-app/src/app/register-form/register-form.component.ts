import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  nombre = '';
  apellidos = '';
  nif = '';
  email = '';
  telefono = '';
  sexo = '';
  origen = '';
  password = '';
  confirmPassword = '';
  aceptaTerminos = false;

  registrar() {
    console.log('Nombre:', this.nombre);
    console.log('Apellidos:', this.apellidos);
    console.log('NIF:', this.nif);
    console.log('Email:', this.email);
    console.log('Teléfono:', this.telefono);
    console.log('Sexo:', this.sexo);
    console.log('Cómo conoció la página:', this.origen);
    console.log('Contraseña:', this.password);
    console.log('Confirmar contraseña:', this.confirmPassword);
    console.log('Términos aceptados:', this.aceptaTerminos);
  }
}
