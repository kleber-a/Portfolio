import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  public list: Array<any> = [
    {
      titulo: 'Calling-System',
      descricao:
        `
      Projeto desenvolido para gerenciar 
      solicitações de chamados de uma empresa. Foi utizado
      React junto ao javaScript e também o firebase como o 
      banco de dados.
      `,
      image: "../../../assets/projects/System.gif",
      color: "#ff3a5e"
    },
    {
      titulo: 'Calling-System',
      descricao:
        `
      Projeto desenvolido para gerenciar 
      solicitações de chamados de uma empresa. Foi utizado
      React junto ao javaScript e também o firebase como o 
      banco de dados.
      `,
      image: "../../../assets/projects/System.gif",
      color: "#00a3ff"
    },
    {
      titulo: 'Calling-System',
      descricao:
        `
      Projeto desenvolido para gerenciar 
      solicitações de chamados de uma empresa. Foi utizado
      React junto ao javaScript e também o firebase como o 
      banco de dados.
      `,
      image: "../../../assets/projects/System.gif",
      color: "#a6fb98"
    },
    {
      titulo: 'Calling-System',
      descricao:
        `
      Projeto desenvolido para gerenciar 
      solicitações de chamados de uma empresa. Foi utizado
      React junto ao javaScript e também o firebase como o 
      banco de dados.
      `,
      image: "../../../assets/projects/System.gif",
      color: "#ff3a5e"
    },
    
  ]

}
