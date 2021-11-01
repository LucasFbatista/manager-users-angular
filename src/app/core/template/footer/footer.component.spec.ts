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
});
