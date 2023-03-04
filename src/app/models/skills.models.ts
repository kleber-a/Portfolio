export interface Skill{
    id:number,
    nome: string,
    description: string,
    icon: string
} 


export const skills: Skill[] = [
    {id: 1, nome: "html", description: "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir", icon: "../../../assets/icons/technology/html.svg"}, 
    {id: 2, nome: "teste2", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/css.svg"},
    {id: 3, nome: "teste3", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/javaScript.svg"},
    {id: 4, nome: "teste4", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/sass.svg"},
    {id: 5, nome: "teste5", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/react.svg"},
    {id: 7, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/angular.svg"},
    {id: 8, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/java.svg"},
    {id: 9, nome: "teste6", description: "Tenho 1 ano de conhecimento.", icon: "../../../assets/icons/technology/mysql.svg"},
  ]