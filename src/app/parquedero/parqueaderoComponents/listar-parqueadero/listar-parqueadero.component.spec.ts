import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParqueaderoComponent } from './listar-parqueadero.component';

describe('ListarParqueaderoComponent', () => {
  let component: ListarParqueaderoComponent;
  let fixture: ComponentFixture<ListarParqueaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarParqueaderoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
