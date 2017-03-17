"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PdfFile = (function () {
    function PdfFile(categoryId, displayName, folderId, hasCover, id, isFavourite, name, pageCount, viewed) {
        this.categoryId = categoryId;
        this.displayName = displayName;
        this.folderId = folderId;
        this.hasCover = hasCover;
        this.id = id;
        this.isFavourite = isFavourite;
        this.name = name;
        this.pageCount = pageCount;
        this.viewed = viewed;
    }
    return PdfFile;
}());
exports.PdfFile = PdfFile;
//# sourceMappingURL=pdf-file.js.map