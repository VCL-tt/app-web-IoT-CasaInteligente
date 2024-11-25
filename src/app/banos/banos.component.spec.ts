import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanosComponent } from './banos.component';

describe('BanosComponent', () => {
  let component: BanosComponent;
  let fixture: ComponentFixture<BanosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanosComponent]
    });
    fixture = TestBed.createComponent(BanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
