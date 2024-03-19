import {Component} from '@angular/core';
import {DropEvent} from 'ng-drag-drop';

@Component({
  selector: 'swap-list',
  templateUrl: 'app/swap-list/swap-list.component.html',
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
      /*transition: all .2s ease-in-out;*/
      /*transform: scale(1.05);*/
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }

    .drag-transit {
      display: flex !important;
    }

    .transit-element {
      height: 50px;
      width: 50px;
      display: none; // will be changed to "flex" via transit class
      visibility: hidden;
      align-items: center;
      justify-content: center;
    }
  `
  ]
})
export class SwapListComponent {
  list1 = [
    {name: 'Toyota', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/toyota.png?itok=bE9KM53i'},
    {name: 'Bugati', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/7420/brand.gif?itok=mh2YN5jB'},
    {name: 'Suzuki', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072020/logo_suzuki.png?ckDUi74NAcTu5w0ITFhpPHE_Nt6SC2zz&itok=aaz3mvwQ'}
  ];

  list2 = [
    {name: 'Mercedes', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/052018/mercedes_benz_2018.jpg?yquMxj91WRKdnxbjcdcRoQRLfGGcjORy&itok=uc7mrHj0'},
    {name: 'Honda', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102022/honda.png?K2B5BE1GmXX23kaaODn7mHNP6C4spGvD&itok=sDfk9mvF'},
    {name: 'BMW', imgSrc: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/112022/e136c42d-d9b4-4ffe-a4a9-cae8aa162d10.png?YWryhRKQNYmaZOf5jiUgaTC5TPl6upmZ&itok=m80fSwUl'}
  ];


  onList1Drop(e: DropEvent) {
    this.list1.push(e.dragData);
    this.removeItem(e.dragData, this.list2)
  }

  onList2Drop(e: DropEvent) {
    this.list2.push(e.dragData);
    this.removeItem(e.dragData, this.list1)
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
