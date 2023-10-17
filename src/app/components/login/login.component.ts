import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 form:FormGroup;
 carga = false;
 constructor(private fb:FormBuilder, private _snackbar : MatSnackBar, private router: Router){
  this.form = this.fb.group({
  usuario:['',Validators.required,Validators.minLength(5)],
  password:['',Validators.required]
  }
  )
 }
ngOnInit():void{

}

// Funcion para ingresar toma el usuario y el password
ingresar(){
  console.log(this.form);
  const usuario = this.form.value.usuario;
  const password = this.form.value.password;
  console.log(usuario);
  console.log(password);
  if(usuario == 'eroldan' && password == 'eze123'){
    // redirecciona al dashboard
    this.fakeLoading(); 
  }else{
    //mostrar error
    this.error();
    this.form.reset(); //Se resetea el formulario
  }
}

//mensaje de error creado con snackbar de material angular
error(){
  this._snackbar.open('Ingreso inválido','',{
    duration:3000,
    horizontalPosition:'center',
    verticalPosition:'bottom'
  })
}

// Se crea un intrumento de carga con atributo
fakeLoading(){
this.carga = true;
setTimeout(() => {

this.router.navigate(['dashboard']) // Navega al dashboard luego de ingresar ok
},1500);
}
}
