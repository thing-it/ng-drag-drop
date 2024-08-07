import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NgDragDropService {
  dragData: any;
  scope?: string | Array<string>;
  onDragStart = new Subject<void>();
  onDragEnd = new Subject<void>();
}
