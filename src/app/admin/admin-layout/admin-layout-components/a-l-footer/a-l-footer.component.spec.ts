import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALFooterComponent } from './a-l-footer.component';

describe('ALFooterComponent', () => {
  let component: ALFooterComponent;
  let fixture: ComponentFixture<ALFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
