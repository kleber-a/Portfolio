import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { dadosFooter } from '../models/dadosFooter.models';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  private url: string = "https://63a59f6af8f3f6d4abfb383d.mockapi.io/api-portfolio/sendEmail";

  public emitEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  public getFooter(): Observable<dadosFooter> {
    return this.http.get<dadosFooter>(this.url)
      .pipe(
        res => res,
        error => error
      )
    }

  public dadosFooterInformation(value: Object){
    return this.emitEvent.emit(value)
  }


}
