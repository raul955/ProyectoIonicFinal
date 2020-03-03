import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase) { }

  getRecetas() {
    const path = 'recetas/';
    return this.db.list(path).snapshotChanges();
  }

  removeRecetas(recetaUid) {
    const path = 'recetas/' + recetaUid;
    return this.db.object(path).remove();
  }


}
