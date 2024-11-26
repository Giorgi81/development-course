import { Injectable } from '@angular/core';
import {collection, Firestore, getFirestore} from "@angular/fire/firestore";
import {Auth} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private auth: Auth) {
  }

  db : Firestore = getFirestore()


  collect  = collection(this.db, 'course')

  collection = collection(this.db, 'courseServices')



}

