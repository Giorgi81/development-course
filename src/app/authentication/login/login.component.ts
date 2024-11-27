import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router,
              private authService: AuthService,
              private fb : FormBuilder,
  ) {
  }

  form !: FormGroup
  ngOnInit() {
    this.form = this.fb.group({
      email : ['', [Validators.required]],
      password : ['', [Validators.required]]
    })
  }

  goToRegister () {
    this.router.navigate(['/register'])
  }



  goToHome () {

    const {email, password} = this.form.value;
    this.authService.login(email, password)
    this.authService.loggedIn = true
    this.router.navigate(['/home'])

  }
}
