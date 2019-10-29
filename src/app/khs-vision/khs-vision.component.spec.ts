import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhsVisionComponent } from './khs-vision.component';

describe('KhsVisionComponent', () => {
  let component: KhsVisionComponent;
  let fixture: ComponentFixture<KhsVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhsVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhsVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
