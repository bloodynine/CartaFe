import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCardComponent } from './carta-card.component';

describe('CartaCardComponent', () => {
  let component: CartaCardComponent;
  let fixture: ComponentFixture<CartaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
