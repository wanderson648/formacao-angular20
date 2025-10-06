import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcitveButtonComponent } from './acitve-button.component';

describe('AcitveButtonComponent', () => {
  let component: AcitveButtonComponent;
  let fixture: ComponentFixture<AcitveButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcitveButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcitveButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
