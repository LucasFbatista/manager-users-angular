import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreModule } from '../../core.module';

import { FooterComponent } from './footer.component';

describe(`${FooterComponent.name}`, () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[ CoreModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
  });

  it('Deve criar o component Footer', () => {
    fixture.detectChanges();
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('(D) Deve carregar o titulo("Desenvolvido por Lucas Ferreira" (tag: span))', () => {
    fixture.detectChanges();
    const titleComponent = fixture.nativeElement.querySelector('span');
    expect(titleComponent.textContent.trim()).toBe("Desenvolvido por Lucas Ferreira");
  });

  it('(D) Deve carregar a class("container-images" (tag: ul))', () => {
    fixture.detectChanges();
    const classContainer = fixture.nativeElement.querySelector('.container-images');
    expect(classContainer).toBeDefined();
    expect(classContainer).toBeTruthy();
  });

  it('(D) Deve carregar as imagens("container-images" (tag: img))', () => {
    fixture.detectChanges();
    const classContainer = fixture.nativeElement.querySelector('.container-images > li > img');
    expect(classContainer).toBeDefined();
    expect(classContainer).toBeTruthy();
  });
});
