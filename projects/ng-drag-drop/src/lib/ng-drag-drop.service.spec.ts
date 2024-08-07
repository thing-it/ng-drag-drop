import { TestBed } from '@angular/core/testing';

import { NgDragDropService } from './ng-drag-drop.service';

describe('NgDragDropService', () => {
  let service: NgDragDropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDragDropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
