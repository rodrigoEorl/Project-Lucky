import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresListComponent } from './trabajadores-list.component';

describe('TrabajadoresListComponent', () => {
  let component: TrabajadoresListComponent;
  let fixture: ComponentFixture<TrabajadoresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadoresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajadoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
