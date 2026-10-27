import { Component } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';

@Component({
  selector: 'app-root',
  imports: [RegisterFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
