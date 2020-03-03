import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BorrarPage } from './borrar.page';

describe('BorrarPage', () => {
  let component: BorrarPage;
  let fixture: ComponentFixture<BorrarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BorrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
