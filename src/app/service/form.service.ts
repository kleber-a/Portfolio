import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DadosForm } from '../models/dadosForm.models';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private fireStore: Firestore) { }

  async add(place: DadosForm) {
    const placeRef = collection(this.fireStore, 'Dados');
    return await addDoc(placeRef, place)
    .then((res)=>{
      console.log(res)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
}
