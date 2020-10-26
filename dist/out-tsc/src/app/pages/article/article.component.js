import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent(activeModal) {
        this.activeModal = activeModal;
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "my_modal_title", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "my_modal_content", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ArticleComponent.prototype, "my_modal_image", void 0);
    ArticleComponent = __decorate([
        Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styles: []
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ArticleComponent);
    return ArticleComponent;
}());
export { ArticleComponent };
//# sourceMappingURL=article.component.js.map