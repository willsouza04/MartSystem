import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoMenuComponent } from './mercado-menu.component';

describe('MercadoMenuComponent', () => {
  let component: MercadoMenuComponent;
  let fixture: ComponentFixture<MercadoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercadoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
