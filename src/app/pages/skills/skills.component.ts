import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public list: Array<any> = [
    {id: 1, nome: "HTML", description: "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir", icon: "../../../assets/icons/technology/html.svg"}, 
    {id: 2, nome: "teste2", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/css.svg"},
    {id: 3, nome: "teste3", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/javaScript.svg"},
    {id: 4, nome: "teste4", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/sass.svg"},
    {id: 5, nome: "teste5", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/react.svg"},
    {id: 7, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/angular.svg"},
    {id: 8, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/java.svg"},
    {id: 9, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/mysql.svg"},
  ]
  public cursos: Array<any> = [
    {id: 1, titulo: "React Js do zero ao avançado ", horas: "24h"}, 
    {id: 2, titulo: "Curso de Angular 2 (v15+) Typescript do Básico ao Avançado", horas: "24h"},
    {id: 3, titulo: "JavaScript", horas: "24h"},
    {id: 4, titulo: "JavaScript", horas: "24h"},
    {id: 5, titulo: "JavaScript", horas: "24h"},
    {id: 6, titulo: "JavaScript", horas: "24h"},
    {id: 6, titulo: "JavaScript", horas: "24h"},
    {id: 6, titulo: "JavaScript", horas: "24h"},
    {id: 6, titulo: "JavaScript", horas: "24h"},
    {id: 6, titulo: "JavaScript", horas: "24h"},
  ]

  public panelOpenState: boolean = false;
  public isSelected: boolean = false;
  public description: string = "Clique em alguma tecnologia"

  public selecionado : number = 0;


  public change(){
    if(this.selecionado > 0){
      this.list.map((item)=>{
          item.id === this.selecionado? this.description = item.description: null;
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
