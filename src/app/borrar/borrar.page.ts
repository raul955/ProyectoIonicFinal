import { Component, OnInit, Input } from '@angular/core';
import { FireDbService } from '../fire-db.service';
import { Recetas } from '../recetas';
import { CreacionserviceService } from '../creacion/creacionservice.service';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.page.html',
  styleUrls: ['./borrar.page.scss'],
})
export class BorrarPage implements OnInit {


recetas = [];



  constructor(public db: FireDbService) { }

  ngOnInit() {
    this.db.getRecetas().subscribe( snap => {
      this.recetas = [];
      snap.forEach( u=> {

        const receta: any = u.payload.val();
        receta.key = u.key;

        this.recetas.push(receta);
        console.log(u);
      })
      console.log('recetas: '+this.recetas);
    })
  }

  
}
