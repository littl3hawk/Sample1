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
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var confirm_dialog_component_1 = require("../component/confirm-dialog.component");
var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirmCustom = function (title, message, disableClose, buttons) {
        return this.setupDialog(title, message, disableClose, buttons);
    };
    DialogsService.prototype.confirmYesNo = function (title, message, disableClose) {
        return this.setupDialog(title, message, disableClose, [new confirm_dialog_component_1.ConfirmDialogButton('Yes', true), new confirm_dialog_component_1.ConfirmDialogButton('No', false)]);
    };
    DialogsService.prototype.message = function (title, message, disableClose, buttonText) {
        return this.setupDialog(title, message, disableClose, [new confirm_dialog_component_1.ConfirmDialogButton(buttonText, true)]);
    };
    DialogsService.prototype.setupDialog = function (title, message, disableClose, buttons) {
        var dialogRef;
        dialogRef = this.dialog.open(confirm_dialog_component_1.ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.buttons = buttons;
        dialogRef.config.disableClose = disableClose;
        return dialogRef.afterClosed();
    };
    return DialogsService;
}());
DialogsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [material_1.MdDialog])
], DialogsService);
exports.DialogsService = DialogsService;
//# sourceMappingURL=dialogs.service.js.map