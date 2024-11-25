import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocheraComponent } from './cochera.component';

describe('CocheraComponent', () => {
  let component: CocheraComponent;
  let fixture: ComponentFixture<CocheraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CocheraComponent]
    });
    fixture = TestBed.createComponent(CocheraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
