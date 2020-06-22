import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoFormularioComponent } from './recurso-formulario.component';

describe('RecursoFormularioComponent', () => {
  let component: RecursoFormularioComponent;
  let fixture: ComponentFixture<RecursoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
