import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../../shared.module';

import { ButtonComponent } from './button.component';

describe(`${ButtonComponent.name}`, () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, SharedModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o component de Botao', () => {
    expect(component).toBeTruthy();
  });

  it('Deve verificar se as propriedades do botao foi carregada corretamente', () => {
    fixture.detectChanges();
    component.type = "submit";
    component.url = "/user";
    component.size = "md";
    component.showOrHide = true;
    component.name = "Salvar";
    component.classBtn = "success";
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector("button");

    expect(component.url).toBe("/user");
    expect(button.type).toBe(component.type);
    expect(button.className).toContain(component.size);
    expect(button.disabled).toBe(component.showOrHide);
    expect(button.textContent.trim()).toBe(component.name);
    expect(button.className).toContain(component.classBtn);
  });
});
