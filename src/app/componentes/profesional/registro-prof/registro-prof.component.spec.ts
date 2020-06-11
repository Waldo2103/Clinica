import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProfComponent } from './registro-prof.component';

describe('RegistroProfComponent', () => {
  let component: RegistroProfComponent;
  let fixture: ComponentFixture<RegistroProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
