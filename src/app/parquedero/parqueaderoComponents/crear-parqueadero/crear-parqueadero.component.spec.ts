import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearParqueaderoComponent } from './crear-parqueadero.component';

describe('CrearParqueaderoComponent', () => {
  let component: CrearParqueaderoComponent;
  let fixture: ComponentFixture<CrearParqueaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearParqueaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
