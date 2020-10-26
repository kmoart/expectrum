import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth, router, articles) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.articles = articles;
        this.articulos = [];
        this.articles.get5Articles()
            .subscribe(function (data) {
            _this.articulos = data.slice(0, 5);
            console.log(data.slice(0, 5));
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.salir = function () {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            ArticlesService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map