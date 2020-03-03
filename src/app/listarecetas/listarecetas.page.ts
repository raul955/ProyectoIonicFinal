import { Component, OnInit } from '@angular/core';
import { Recetas } from '../recetas';
import { CreacionserviceService } from '../creacion/creacionservice.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-listarecetas',
  templateUrl: './listarecetas.page.html',
  styleUrls: ['./listarecetas.page.scss'],
})
export class ListarecetasPage implements OnInit {
  public ocultar1: boolean = false;
  public ocultar2: boolean = false;
  recetas: any;
  recetadetalle="recetadetalle";
  valor = "key";
  nombre = null;

  constructor(private creacionserviceService: CreacionserviceService, public navCtrl: NavController) { }

  ngOnInit() {
    this.getRecetaList();
  }

  accion1(){
    this.ocultar1 = !this.ocultar1;
    }

  getRecetaList() {
    this.creacionserviceService.getRecetaList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(recetas => {
      this.recetas = recetas;
      this.nombre = recetas[0].nombre;
    });
  }

  abrirDetalle(){
    this.navCtrl.navigateForward(`/recetadetalle/${this.nombre}`);
  }



}
