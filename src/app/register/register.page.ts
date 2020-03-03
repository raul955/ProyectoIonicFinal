import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = "";
	password: string = "";
  cpassword: string = "";

  constructor(public afAuth: AngularFireAuth, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async register(){
    const {username, password, cpassword} = this;
    if(password !== cpassword){
      this.presentAlert('Error', 'Las contraseñas no coinciden');
    }
    try{
    const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password);
    this.router.navigate(['menu']);
    console.log(res);
    }catch(err){
      if(err.code==='auth/email-already-in-use'){
        this.presentAlert('Error', 'Correo ya en uso');
        }else if(err.code==='auth/weak-password'){
          this.presentAlert('Error', 'Contraseña demasiado débil');
        }else if(err.code==='auth/invalid-email'){
          this.presentAlert('Error', 'El correo no es válido');
        }
  }
  };

  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})
		await alert.present()
	}

}
