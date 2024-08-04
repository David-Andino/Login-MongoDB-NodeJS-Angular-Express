import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true, // Marca este componente como independiente
  templateUrl: './login.component.html', // Ruta al archivo HTML
  styleUrls: ['./login.component.css'] // Ruta al archivo CSS (correcto es styleUrls, no styleUrl)
})
export class LoginComponent {
  // Lógica del componente aquí, si es necesario
}
