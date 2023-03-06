import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EmitterService } from 'src/app/service/emitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public changeOpen = new EventEmitter();

  public close: boolean = true;

  public hideFooter: string = "Ocultar rodapé"
  constructor(private emitter: EmitterService) { }
  ngOnInit(): void {
    this.emitter.eventChange.subscribe({
      next: (res: boolean) => {
        if (res === true) {
          this.hideFooter = "Ocultar rodapé"
        } else {
          this.hideFooter = "Mostrar rodapé"
        }
      }
    })
    
    
  }


  public  closeFooter() {
      if (this.close === true) {
        this.close = false;
        this.emitter.setEvent(this.close)
      }else if(this.close === false){
        this.close = true;
        this.emitter.setEvent(this.close)
      }
  }

}
