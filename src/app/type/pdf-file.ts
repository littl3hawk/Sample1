export class PdfFile {
    constructor(
        public categoryId: number,
        public displayName: string,
        public folderId: number,
        public hasCover: number,
        public id: number,
        public isFavourite: boolean,
        public name: string,
        public pageCount: number,
        public viewed: number
    ) { }
}