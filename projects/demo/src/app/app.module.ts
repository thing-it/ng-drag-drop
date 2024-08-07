import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CompleteDemoComponent } from './components/complete-demo/complete-demo.component';
import { DefaultCssComponent } from './components/default-css/default-css.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { DragHelperComponent } from './components/drag-helper/drag-helper.component';
import { DropScopeFunctionDemoComponent } from './components/drop-scope-function-demo/drop-scope-function.component';
import { PerformanceDemoComponent } from './components/performance-demo/performance-demo.component';
import { SwapListComponent } from './components/swap-list/swap-list.component';
import { NgDragDropModule } from 'ng-drag-drop';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompleteDemoComponent,
    DropScopeFunctionDemoComponent,
    SwapListComponent,
    DeleteItemComponent,
    DragHelperComponent,
    DefaultCssComponent,
    PerformanceDemoComponent,
  ],
  imports: [CommonModule, FormsModule, NgDragDropModule],
  providers: [],
  bootstrap: [],
  exports: [
    CompleteDemoComponent,
    DropScopeFunctionDemoComponent,
    SwapListComponent,
    DeleteItemComponent,
    DragHelperComponent,
    DefaultCssComponent,
    PerformanceDemoComponent,
  ],
})
export class AppModule {}
