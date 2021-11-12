import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearOperadorComponent } from './crear-operador.component';

describe('CrearOperadorComponent', () => {
  let component: CrearOperadorComponent;
  let fixture: ComponentFixture<CrearOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearOperadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
