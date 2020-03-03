import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Recetas } from '../recetas';
import { AlertController } from '@ionic/angular';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreacionserviceService {

  private dbPath = '/recetas';

  //elemento AngularFireList donde se obtendrá la información de la bbdd y posteriormente se operará con él
  recetasRef: AngularFireList<Recetas> = null;
  recetaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, public alertController: AlertController) {
    this.recetasRef = db.list(this.dbPath);
    
    console.log("constructor")
    
  }

  //Servicio con los métodos necesarios para la gestión de las recetas
  createReceta(receta: Recetas): void {
    this.recetasRef.push(receta);
    console.log("createReceta")
    this.presentAlert('Correcto', 'Receta insertada');
  }

  updateReceta(key: string, value: any): Promise<void> {
    return this.recetasRef.update(key, value);
    console.log("updateReceta")
  }

  deleteRecetas(key: string): Promise<void> {
    return this.recetasRef.remove(key);
    console.log("remove")
  }

  getRecetaList(): AngularFireList<Recetas> {
    return this.recetasRef;
    console.log("get")
  }

  deleteAll(): Promise<void> {
    return this.recetasRef.remove();
    console.log("delete")
  }


  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})
		await alert.present()
  }
  
 
}

