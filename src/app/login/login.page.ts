import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
	password: string = "";

  constructor( public afAuth: AngularFireAuth, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  //login
  async login(){
    const { username, password } = this; 
    try{
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password);
      this.router.navigate(['menu']);
    }catch(err){
      if(err.code==='auth/wrong-password'){
        this.presentAlert('Error', 'Contraseña incorrecta');
        }else if(err.code==='auth/user-not-found'){
          this.presentAlert('Error', 'El usuario no existe');
        }else if(err.code==='auth/invalid-email'){
          this.presentAlert('Error', 'El correo no es válido');
        }
    }
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
