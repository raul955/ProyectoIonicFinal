import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarecetasPage } from './listarecetas.page';

describe('ListarecetasPage', () => {
  let component: ListarecetasPage;
  let fixture: ComponentFixture<ListarecetasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarecetasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarecetasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
