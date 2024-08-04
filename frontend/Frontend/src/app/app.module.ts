import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module'; // Asegúrate de que la ruta sea correcta
import { AppComponent } from './app.component'; // Asegúrate de que la ruta sea correcta

// Importa otros módulos necesarios
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent
    // Declara otros componentes principales si los hay
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule // Importa el módulo de autenticación
  ],
  providers: [],
  bootstrap: [AppComponent] // El componente principal que se inicializa
})
export class AppModule { }
