import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn : boolean = false

  constructor(private auth : Auth) { }

  register (email : string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password )
      .then((response) =>

        updateProfile(response.user, {displayName: email} )

      )
  }


  login (email : string, password: string) {

    signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('Logged in successfully')
      })

  }



}
