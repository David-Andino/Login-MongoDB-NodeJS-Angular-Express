import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../../models/user';
import { JwtResponseI } from '../../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    AUTH_SERVER: string = 'http://localhost:3000'; // Corregir URL del servidor
    authSubject = new BehaviorSubject(false);
    private token: string = ''; // Inicializar el token

    constructor(private httpClient: HttpClient) {}

    register(user: UserI): Observable<JwtResponseI> {
        return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/register`, user).pipe(
            tap((res: JwtResponseI) => {
                if (res) {
                    this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
                }
            })
        );
    }

    login(user: UserI): Observable<JwtResponseI> {
        return this.httpClient.post<JwtResponseI>(`${this.AUTH_SERVER}/login`, user).pipe(
            tap((res: JwtResponseI) => {
                if (res) {
                    this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
                }
            })
        );
    }

    logout(): void {
        this.token = '';
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('EXPIRES_IN');
    }

    private saveToken(token: string, expiresIn: string): void {
        localStorage.setItem('ACCESS_TOKEN', token);
        localStorage.setItem('EXPIRES_IN', expiresIn); // Guardar expiresIn como cadena
        this.token = token;
    }

    private getToken(): string {
        if (!this.token) {
            const token = localStorage.getItem('ACCESS_TOKEN');
            this.token = token ? token : '';
        }
        return this.token;
    }
}
