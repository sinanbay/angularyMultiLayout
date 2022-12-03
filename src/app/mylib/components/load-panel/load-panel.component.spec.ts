import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPanelComponent } from './load-panel.component';

describe('LoadPanelComponent', () => {
  let component: LoadPanelComponent;
  let fixture: ComponentFixture<LoadPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
