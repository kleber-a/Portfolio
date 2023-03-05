import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {


  constructor(){}

  public panelOpenState: boolean = false

  public lista: Array<any> = [
    {
      titulo: "Desenvolvedor React Native",
      ano: "Jan 2022 - Maio 2022",
      duracao: "4 meses",
      empresa: "Compass Uol",
      descricao:
        `
      Funções Desempenhadas: Desenvolver Aplicativos Mobileutilizando a 
      linguagem JavaScript, e as bibliotecas React e React Native com vivência 
      em metodologias ágeis como Scrum,Jira e o Kanban. Tive também interação com Figma e postman.
      `
    },
    {
      titulo: "Assistente Administrativo",
      ano: "Jul 2015 - Jul 2016",
      duracao: "1 ano",
      empresa: "Aguia Promotora",
      descricao:
      `
      Funções Desempenhadas: Digitação de documentos, lançar dados
      no sistema, conferências, emissões e cobranças contratuais.
      `
    },
  ]
}
