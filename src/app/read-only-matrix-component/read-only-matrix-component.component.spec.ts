import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyMatrixComponentComponent } from './read-only-matrix-component.component';

describe('ReadOnlyMatrixComponentComponent', () => {
  let component: ReadOnlyMatrixComponentComponent;
  let fixture: ComponentFixture<ReadOnlyMatrixComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadOnlyMatrixComponentComponent]
    });
    fixture = TestBed.createComponent(ReadOnlyMatrixComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
