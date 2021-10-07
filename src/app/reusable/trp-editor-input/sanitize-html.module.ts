import { NgModule } from "@angular/core";
import { SafeHtmlPipe } from "./sanitize-html";

@NgModule({
    imports: [],
    declarations: [SafeHtmlPipe],
    exports: [SafeHtmlPipe]
})
export class SafeHtmlModule { }