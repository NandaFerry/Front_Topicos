import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacaoFormularioComponent } from './anotacao-formulario.component';

describe('AnotacaoFormularioComponent', () => {
  let component: AnotacaoFormularioComponent;
  let fixture: ComponentFixture<AnotacaoFormularioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacaoFormularioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacaoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
