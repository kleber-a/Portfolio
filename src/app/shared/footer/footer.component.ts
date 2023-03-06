import { Component, OnDestroy, OnInit } from '@angular/core';
import { dadosFooter } from 'src/app/models/dadosFooter.models';
import { EmitterService } from 'src/app/service/emitter.service';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy{

  public dadosFooter: dadosFooter | any;

  public changeEmitte: boolean = true;

  constructor(private footerList: FooterService, private emitter: EmitterService) { }

  ngOnInit(): void {
    this.footerList.getFooter().subscribe({
      next: (res) => { this.dadosFooter = res },
      error: (error) => { console.log(error) }
    })

  
  }

  ngOnDestroy(): void {
    this.emitter.emitEvent.subscribe({
      next: (res: boolean) => {
        
        this.changeEmitter(!res)
        
      } 
    })
  }
  
  public changeEmitter(value: boolean){
    this.emitter.setChange(value)
  }

}
