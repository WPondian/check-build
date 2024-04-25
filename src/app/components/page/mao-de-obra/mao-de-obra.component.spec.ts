import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaoDeObraComponent } from './mao-de-obra.component';

describe('MaoDeObraComponent', () => {
  let component: MaoDeObraComponent;
  let fixture: ComponentFixture<MaoDeObraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaoDeObraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaoDeObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
