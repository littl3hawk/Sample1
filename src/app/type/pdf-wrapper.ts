import { PdfCategory } from './pdf-category';
import { PdfFile } from './pdf-file';
import { PdfFolder } from './pdf-folder';

export class PdfWrapper {
    constructor(
        public files : PdfFile[],
        public folders: PdfFolder[],
        public categories: PdfCategory[]) {
    }
}