import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDragDropComponent } from './ng-drag-drop.component';

describe('NgDragDropComponent', () => {
  let component: NgDragDropComponent;
  let fixture: ComponentFixture<NgDragDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgDragDropComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgDragDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
