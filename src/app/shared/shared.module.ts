import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import {MatSelectModule} from '@angular/material/select';
import { ModalProjectComponent } from './modal-project/modal-project.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ModalProjectComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    ModalProjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class SharedModule { }
