export interface Skill{
    id:number,
    nome: string,
    description: string,
    icon: string
} 


export const skills: Skill[] = [
    {id: 1, nome: "html", description: "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir - 2 Anos de conhecimento", icon: "../../../assets/icons/technology/html-5.svg"}, 
    {id: 2, nome: "css", description: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web - 2 Anos de conhecimento", icon: "../../../assets/icons/technology/css3.svg"},
    {id: 3, nome: "javascript", description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma, juntamente com HTML e CSS - 2 Anos de conhecimento.", icon: "../../../assets/icons/technology/javascript.svg"},
    {id: 5, nome: "react", description: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. - 1 Ano de conhecimento.", icon: "../../../assets/icons/technology/react.svg"},
    {id: 7, nome: "angular", description: "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. - 1 Ano de conhecimento", icon: "../../../assets/icons/technology/angular.svg"},
    {id: 8, nome: "java", description: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation. - 3 Anos de conhecimento", icon: "../../../assets/icons/technology/java.svg"},
    {id: 9, nome: "mysql", description: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. - 2 Anos de conhecimento", icon: "../../../assets/icons/technology/mysql.svg"},
  ]