import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DadosForm } from 'src/app/models/dadosForm.models';
import { FormService } from 'src/app/service/form.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnChanges {

  constructor(private formService: FormService, private formBuilder: FormBuilder) { }

  ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }

  public emailValidator = Validators.pattern('[a-zA-Z\s]*');
  public dados: FormGroup = this.formBuilder.group({
    nome: ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(15), Validators.pattern('[a-zA-Z\s]*')])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    comentario: ['', Validators.required]
  })

  public validation(value: string): string | any {
    if(this.dados.get(value)?.touched && (!this.dados.get(value)?.dirty || this.dados.get(value)?.invalid)){
      return `*Preencher ${value} corretamente`;
    }else{
      return '';
    }
  }

  async onSubmit() {
    if (this.dados.value) {
      console.log(this.dados.value)
      await this.formService.add(this.dados.value)
      this.dados.reset();
    }
  }

}
