
export interface Course{
    id: number,
    titulo: string,
    horas: string
}



export const courses: Course[] = [
    {id: 1, titulo: "Udemy: React Js do zero ao avançado ", horas: "24h"}, 
    {id: 2, titulo: "Udemy: Curso de Angular 2 (v15+) Typescript do Básico ao Avançado", horas: "24h"},
    {id: 3, titulo: "Alura: JavaScript: Primeiros Passos Com a Linguagem", horas: "10h"},
    {id: 4, titulo: "Alura: JavaScript: Programando a Orientação a Objetos", horas: "10h"},
    {id: 5, titulo: "Alura: React: Entendendo Como a Biblioteca Funciona", horas: "12h"},
    {id: 6, titulo: "Alura: React Native: Começando do Zero", horas: "10h"},
    {id: 7, titulo: "Alura: Scrum: Agilidade em Seu Projeto", horas: "10h"},
    {id: 8, titulo: "Alura: Segurança Web: Vulnerabilidades do Seu Sistema e OWASP", horas: "12h"},
  ]