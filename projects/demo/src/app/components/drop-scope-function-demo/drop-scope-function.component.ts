import { Component } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'drop-scope-function-demo',
  templateUrl: './drop-scope-function.component.html',
  styles: [],
})
export class DropScopeFunctionDemoComponent {
  list1: number[] = [10, 15, 50, 120, 150, 180, 200, 250];
  list2: number[] = [];
  list3: number[] = [];

  num1 = 50;
  num2 = 100;

  onDrop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1);
  }

  onDropGreaterThan(e: DropEvent) {
    this.list3.push(e.dragData);
    this.removeItem(e.dragData, this.list1);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list
      .map(function (e) {
        return e.name;
      })
      .indexOf(item.name);
    list.splice(index, 1);
  }

  isDropAllowedLessThan = (dragData: number) => {
    return dragData < this.num1;
  };

  isDropAllowedGreaterThan = (dragData: number) => {
    return dragData > this.num2;
  };
}
