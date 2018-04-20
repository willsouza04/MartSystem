import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMenuComponent } from './inicio-menu.component';

describe('InicioMenuComponent', () => {
  let component: InicioMenuComponent;
  let fixture: ComponentFixture<InicioMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
