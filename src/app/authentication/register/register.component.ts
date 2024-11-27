import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{


  goToHome () {

  }
  constructor(private authService : AuthService,
              private fb : FormBuilder,
              private router : Router, ) {
  }

  form !: FormGroup

  ngOnInit() {

    this.form = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]

    })



  }


  signUp() {

    const {email, password} = this.form.value;
    this.authService.register(email, password)

    this.router.navigate(['/login'])

  }

}
