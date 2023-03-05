import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmitterService } from 'src/app/service/emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  @Output() public changeOpen = new EventEmitter();

  public close: boolean = true;
  constructor(private emitte: EmitterService)  { }

  ngOnInit(): void {

    this.emitte.emitEvent.subscribe({
      next: (res: any)=> {
        if(res === false){
          this.emitte.setEvent(true)
          this.close = true
        }
      }
    })

      this.emitte.setEvent(true)
    

   
   
  }

  public teste: boolean = true;
  public closeFooter() {
    if (this.close == true) {
      this.emitte.setEvent(false)
      this.close = false;
    }else{
      this.emitte.setEvent(true);
      this.close = true;

    }
  }

}
