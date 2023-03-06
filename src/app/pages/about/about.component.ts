import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EmitterService } from 'src/app/service/emitter.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {

  constructor(private emitter: EmitterService){}
  public close: boolean = true; 

  ngOnInit(): void {
    this.emitter.emitEvent.subscribe({
      next: (res: any)=>{this.close = res}
    })
    console.log(this.close)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  
  

}
