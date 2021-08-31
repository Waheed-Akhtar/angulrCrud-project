import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByDateComponent } from './products-by-date.component';

describe('ProductsByDateComponent', () => {
  let component: ProductsByDateComponent;
  let fixture: ComponentFixture<ProductsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
