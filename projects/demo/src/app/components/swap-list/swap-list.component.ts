import { Component } from '@angular/core';
import { DropEvent } from 'ng-drag-drop';

@Component({
  selector: 'swap-list',
  templateUrl: './swap-list.component.html',
  styles: [
    `
      div.scroll-list {
        overflow: auto;
        max-height: 70vh;
      }

      .drag-over {
        border: #ff525b dashed 2px;
      }

      .drag-hint {
        border: #ffc100 dashed 2px;
      }

      .drag-target-border {
        border: #00bfff dashed 2px;
      }

      .drag-transit {
        display: flex !important;
      }

      .transit-element {
        display: none; // will be changed to "flex" via transit class
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class SwapListComponent {
  list1 = [
    { name: 'Toyota', imgSrc: '/assets/logo-toyota.png' },
    { name: 'Suzuki', imgSrc: '/assets/logo-suzuki.png' },
  ];

  list2 = [
    { name: 'Mercedes', imgSrc: '/assets/logo-mercedes-benz.jpg' },
    { name: 'BMW', imgSrc: '/assets/logo-bmw.png' },
  ];

  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2);
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1);
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map((e) => e.name).indexOf(item.name);
    list.splice(index, 1);
  }
}
