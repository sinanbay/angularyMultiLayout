import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALMenuComponent } from './a-l-menu.component';

describe('ALMenuComponent', () => {
  let component: ALMenuComponent;
  let fixture: ComponentFixture<ALMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ALMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ALMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
