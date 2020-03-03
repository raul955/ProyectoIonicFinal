import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreacionserviceService } from './creacionservice.service';
import { Recetas } from '../recetas';


@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.page.html',
  styleUrls: ['./creacion.page.scss'],
})
export class CreacionPage implements OnInit {

  receta: Recetas = new Recetas();
  submitted = false;

  constructor(private creacionService: CreacionserviceService) { }

  ngOnInit() {
  }

  //Métodos que crean y guardan la receta.
  newRecetas(): void {
    this.submitted = false;
    this.receta = new Recetas();
    console.log("newRecetas")
  }

  save() {
    this.creacionService.createReceta(this.receta);
    this.receta = new Recetas();
    console.log("save")
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log("submit")
  }

}
