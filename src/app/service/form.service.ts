import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { DadosForm } from '../models/dadosForm.models';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  public dados: DadosForm | any = {
    nome: "ola",
    email: "ola@email.com",
    comentario: "testestes"
  }

  constructor(private fireStore: Firestore) { }

  add(place: DadosForm) {
    const placeRef = collection(this.fireStore, 'Dados');
    return addDoc(placeRef, place);
  }
}
