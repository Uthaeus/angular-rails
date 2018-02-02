"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
            {
                title: "My first Doc",
                description: 'adsfasdlkfjas;fj adkfja;f',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'https://collectivehub.com/wp-content/uploads/2016/07/Things_successful_freelancers_do_at_home_body-1.jpg'
            },
            {
                title: "My Second Doc",
                description: 'adsfasdlkfjas;fj adkfja;f',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'https://assets.entrepreneur.com/content/3x2/1300/20180111134829-freelance-2906725-1920.png?width=750&crop=16:9'
            },
            {
                title: "My Last Doc",
                description: 'adsfasdlkfjas;fj adkfja;f',
                file_url: 'http://google.com',
                updated_at: '11/11/16',
                image_url: 'https://tctechcrunch2011.files.wordpress.com/2015/12/shutterstock_279072494.png'
            }
        ];
    }
    DocumentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'documents',
            templateUrl: 'documents.component.html'
        })
    ], DocumentsComponent);
    return DocumentsComponent;
}());
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map