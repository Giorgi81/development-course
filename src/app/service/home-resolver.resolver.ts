import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { getDocs, QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class HomeResolver implements Resolve<any> {
  constructor(private dataService: DataService) {
  }


  async resolve(): Promise<any> {
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(this.dataService.collect as any);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));


  }
}
