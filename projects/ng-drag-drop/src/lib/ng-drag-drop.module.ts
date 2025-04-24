import { NgModule, ModuleWithProviders } from '@angular/core';
import { Draggable } from './directives/draggable.directive';
import { Droppable } from './directives/droppable.directive';
import { NgDragDropService } from './ng-drag-drop.service';

@NgModule({
    imports: [Draggable, Droppable],
    exports: [Draggable, Droppable],
    providers: [NgDragDropService],
})
export class NgDragDropModule {}
