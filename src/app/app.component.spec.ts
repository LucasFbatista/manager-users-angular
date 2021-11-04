import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

describe(`${AppComponent.name}`, () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  it('Deve Criar o component App', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
