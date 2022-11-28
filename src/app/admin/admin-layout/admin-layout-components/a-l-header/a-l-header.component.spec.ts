import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALHeaderComponent } from './a-l-header.component';

describe('ALHeaderComponent', () => {
  let component: ALHeaderComponent;
  let fixture: ComponentFixture<ALHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
