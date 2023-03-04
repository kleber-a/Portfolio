import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule
  ]
})
export class SharedModule { }
