import { Component } from '@angular/core';
import { DadosForm } from 'src/app/models/dadosForm.models';
import { FormService } from 'src/app/service/form.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  constructor(private formService: FormService){

  }
  
  public teste : DadosForm = {
    nome:"teste",
    email:"teste@email.com",
    comentario: "dsdsdsdsds"
  }

  async onSubmit(){
  await this.formService.add(this.teste)
 
  }

}
