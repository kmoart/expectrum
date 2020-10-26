import { __assign, __decorate, __metadata } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
var AuthService = /** @class */ (function () {
    // Crear nuevo usuario
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
    // Ingresar o login
    // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
    function AuthService(http) {
        this.http = http;
        this.url = 'https://identitytoolkit.googleapis.com/v1';
        this.apikey = 'AIzaSyBSeSuRfeGku83NRqUm6mbk9ln9nMfGwHo';
        this.leerToken(); // para asignar el token a la variable userToken
    }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.login = function (usuario) {
        var _this = this;
        var authData = __assign(__assign({}, usuario), { returnSecureToken: true });
        return this.http.post(this.url + "/accounts:signInWithPassword?key=" + this.apikey, authData).pipe(map(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp; // se coloca un return para que el map no bloquee la respuesta
        }));
    };
    AuthService.prototype.nuevoUsuario = function (usuario) {
        var _this = this;
        var authData = __assign(__assign({}, usuario), { returnSecureToken: true });
        return this.http.post(this.url + "/accounts:signUp?key=" + this.apikey, authData).pipe(map(function (resp) {
            _this.guardarToken(resp['idToken']);
            return resp; // se coloca un return para que el map no bloquee la respuesta
        }));
    };
    AuthService.prototype.guardarToken = function (idToken) {
        this.userToken = idToken;
        localStorage.setItem('token', idToken);
        var hoy = new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira', hoy.getTime().toString());
    };
    AuthService.prototype.leerToken = function () {
        if (localStorage.getItem('token')) {
            this.userToken = localStorage.getItem('token');
        }
        else {
            this.userToken = '';
        }
        return this.userToken;
    };
    AuthService.prototype.estaAutenticado = function () {
        if (this.userToken.length < 2) {
            return false;
        }
        var expira = Number(localStorage.getItem('expira'));
        var expiraDate = new Date();
        expiraDate.setTime(expira);
        if (expiraDate > new Date()) {
            return true;
        }
        else {
            return false;
        }
        return this.userToken.length > 2;
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map