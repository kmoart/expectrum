import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticleComponent } from '../article/article.component';
import * as paginate from 'jw-paginate';
var ListComponent = /** @class */ (function () {
    function ListComponent(auth, router, articles, modalService) {
        var _this = this;
        this.auth = auth;
        this.router = router;
        this.articles = articles;
        this.modalService = modalService;
        this.articulos = [];
        //@Input() items: Array<any>;
        this.changePage = new EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
        this.articles.getArticles()
            .subscribe(function (data) {
            _this.articulos = data;
            console.log(data);
            if (_this.articulos && _this.articulos.length) {
                _this.setPage(_this.initialPage);
            }
        });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngOnChanges = function (changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    };
    ListComponent.prototype.setPage = function (page) {
        // get new pager object for specified page
        this.pager = paginate(this.articulos.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        var pageOfItems = this.articulos.slice(this.pager.startIndex, this.pager.endIndex + 1);
        // call change page function in parent component
        this.changePage.emit(pageOfItems);
    };
    ListComponent.prototype.open = function (capital) {
        //getArticle(capital:string){
        var _this = this;
        this.articles.getArticle(capital)
            .subscribe(function (data) {
            _this.articulo = data;
            console.log(data);
            var modalRef = _this.modalService.open(ArticleComponent);
            modalRef.componentInstance.my_modal_title = _this.articulo[0].name;
            modalRef.componentInstance.my_modal_content = _this.articulo[0].capital;
            modalRef.componentInstance.my_modal_image = _this.articulo[0].flag;
        });
        //}
    };
    ListComponent.prototype.salir = function () {
        this.auth.logout();
        this.router.navigateByUrl('/login');
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "changePage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "initialPage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "pageSize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "maxPages", void 0);
    ListComponent = __decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [AuthService,
            Router,
            ArticlesService,
            NgbModal])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map