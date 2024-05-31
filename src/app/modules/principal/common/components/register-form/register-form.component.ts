import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  listFavorites: any[] =
    [
      { id: 1, name: "Pollo" },
      { id: 2, name: "Cerdo" },
      { id: 3, name: "Embutido" }

    ];

  get nameControl() {
    return this.registerForm.controls["name"].value
  }
  get lastnameControl() {
    return this.registerForm.controls["lastname"].value
  }
  get cellphoneControl() {
    return this.registerForm.controls["cellphone"].value
  }
  get emailControl() {
    return this.registerForm.controls["email"].value
  }
  get favoriteControl() {
    return this.registerForm.controls["favorite"].value
  }
  get termsControl() {
    return this.registerForm.controls["terms"].value
  }


  constructor(
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      cellphone: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      favorite: [null],
      terms: [null],
      usedata: [null]
    })

  }

  onRegister() {
    if (this.validateRegister()) {
      Swal.fire({ title: "Se ha registrado correctamente", icon: "success" })
      this.registerForm.reset();
    }

  }



  validateRegister() {
    let message = ""
    let valid = true
    if (this.nameControl == "" || this.nameControl == null) {
      message = "Debe completar sus nombres"
      valid = false;
    } else if (this.lastnameControl == "" || this.lastnameControl == null) {
      message = "Debe completar sus apellidos"
      valid = false;
    } else if (this.cellphoneControl == "" || this.cellphoneControl == null) {
      message = "Debe completar su teléfono celular"
      valid = false;
    } else if (this.emailControl == "" || this.emailControl == null) {
      message = "Debe completar su correo electrónico"
      valid = false;
    } else if (this.termsControl == undefined || this.termsControl == null) {
      message = "Debe aceptar los términos y condiciones"
      valid = false;
    }

    if (!valid) {
      Swal.fire({ title: message, icon: "warning" })
    }

    return valid;
  }
}
