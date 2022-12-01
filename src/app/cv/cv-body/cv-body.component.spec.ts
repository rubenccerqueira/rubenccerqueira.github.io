import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvBodyComponent } from './cv-body.component';

describe('CvBodyComponent', () => {
  let component: CvBodyComponent;
  let fixture: ComponentFixture<CvBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
