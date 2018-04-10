import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMercadoComponent } from './menu-mercado.component';

describe('MenuMercadoComponent', () => {
  let component: MenuMercadoComponent;
  let fixture: ComponentFixture<MenuMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
