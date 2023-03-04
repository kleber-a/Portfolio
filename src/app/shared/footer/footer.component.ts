import { Component, OnInit } from '@angular/core';
import { dadosFooter } from 'src/app/models/dadosFooter.models';
import { FooterService } from 'src/app/service/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public dadosFooter: dadosFooter | any;

  constructor(private footerList: FooterService) { }

  ngOnInit(): void {
    this.footerList.getFooter().subscribe({
      next: (res) => { this.dadosFooter = res },
      error: (error) => { console.log(error) }
    })
  }

}
