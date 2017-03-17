"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_service_1 = require("../service/dialogs.service");
var FeedComponent = (function () {
    function FeedComponent(dialogsService) {
        this.dialogsService = dialogsService;
    }
    FeedComponent.prototype.ngOnInit = function () { };
    FeedComponent.prototype.openDialog = function () {
        var result;
        this.dialogsService
            .confirmYesNo('Remove', "Are you sure you want to remove? v3", true)
            .subscribe(function (res) {
            result = res;
            if (result === true) {
                console.info('Result is true');
            }
            console.info(result);
        });
    };
    return FeedComponent;
}());
FeedComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-feed',
        templateUrl: './feed.component.html'
    }),
    __metadata("design:paramtypes", [dialogs_service_1.DialogsService])
], FeedComponent);
exports.FeedComponent = FeedComponent;
//# sourceMappingURL=feed.component.js.map