import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroMaterialComponent } from './form-cadastro-material.component';

describe('FormCadastroMaterialComponent', () => {
  let component: FormCadastroMaterialComponent;
  let fixture: ComponentFixture<FormCadastroMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCadastroMaterialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCadastroMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
