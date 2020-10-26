import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ArticlesService = /** @class */ (function () {
    function ArticlesService(http) {
        this.http = http;
    }
    ArticlesService.prototype.getArticles = function () {
        return this.http.get('https://restcountries.eu/rest/v2/lang/es');
    };
    ArticlesService.prototype.get5Articles = function () {
        //Listar solo 5 paises
        return this.http.get('https://restcountries.eu/rest/v2/lang/es?limit=5');
    };
    ArticlesService.prototype.getArticle = function (article) {
        return this.http.get("https://restcountries.eu/rest/v2/capital/" + article);
    };
    ArticlesService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], ArticlesService);
    return ArticlesService;
}());
export { ArticlesService };
//# sourceMappingURL=articles.service.js.map