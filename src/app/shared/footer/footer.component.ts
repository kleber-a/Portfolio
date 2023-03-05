import { Component, OnDestroy, OnInit } from '@angular/core';
import { dadosFooter } from 'src/app/models/dadosFooter.models';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  public dadosFooter: dadosFooter | any;

  constructor(private footerList: FooterService) { }

  ngOnInit(): void {
    this.footerList.getFooter().subscribe({
      next: (res) => { this.dadosFooter = res },
      error: (error) => { console.log(error) }
    })
  }

  ngOnDestroy(): void {
    console.log("Rodapé ocultado")
  }

}
