import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalToolbarComponent } from './principal-toolbar.component';

describe('PrincipalToolbarComponent', () => {
  let component: PrincipalToolbarComponent;
  let fixture: ComponentFixture<PrincipalToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
