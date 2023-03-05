import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

public emitEvent = new EventEmitter();

  constructor() { }

public setEvent(value: boolean){
  this.emitEvent.emit(value);
}


}
