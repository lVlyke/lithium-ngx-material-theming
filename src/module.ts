import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeContainer } from "./directives/theme-container.directive";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ThemeContainer
    ],
    exports: [
        ThemeContainer
    ]
})
export class NgxMaterialThemingModule {}
