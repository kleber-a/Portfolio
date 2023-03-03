import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public list: Array<any> = [
    {id: 1, nome: "teste"}, 
    {id: 2, nome: "teste2"},
    {id: 3, nome: "teste3"},
    {id: 4, nome: "teste4"},
    {id: 5, nome: "teste5"},
    {id: 6, nome: "teste6"},
  ]

  public isSelected: boolean = false;
  public description: string = "Clique em alguma tecnologia"

  public selecionado : number = 0;


  public change(){
    if(this.selecionado > 0){
      this.list.map((item)=>{
          item.id === this.selecionado? this.description = item.nome: null;
      })
    }else{
      this.description = "Clique em alguma tecnologia";
    }
  }

  public selected(item:number, i: number){
    if(item == this.selecionado && this.isSelected == true){
      this.selecionado = 0;
      this.isSelected = false;
      this.change()
    }else{
      this.selecionado = item;
      this.isSelected = true
      this.change();
    }

    
  }
  
}
