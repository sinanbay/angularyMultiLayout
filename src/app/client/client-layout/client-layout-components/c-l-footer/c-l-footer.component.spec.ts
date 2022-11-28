import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CLFooterComponent } from './c-l-footer.component';

describe('CLFooterComponent', () => {
  let component: CLFooterComponent;
  let fixture: ComponentFixture<CLFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CLFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CLFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
