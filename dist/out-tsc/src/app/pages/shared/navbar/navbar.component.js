import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.salir = function () {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    };
    NavbarComponent = __decorate([
        Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [AuthService,
            Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map