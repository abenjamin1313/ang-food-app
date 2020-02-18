import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponet } from './alert/alert.component';
// Directive
import { DropdownDirective } from './dropdown.directive';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@NgModule({
    declarations: [
        AlertComponet,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponet,
        LoadingSpinnerComponent,
        DropdownDirective,
        PlaceholderDirective,
        CommonModule
    ],
    entryComponents: [AlertComponet]
})
export class SharedModule {}
