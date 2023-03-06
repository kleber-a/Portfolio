export interface Project {
  titulo: string,
  descricao: string,
  image: string,
  color: string,
  github: string,
  test: string
}

export const projects: Project[] = [
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
    color: "#ff3a5e",
    github: "https://github.com/kleber-a/calling-system",
    test: "https://calling-system-gilt.vercel.app/"
  },
  {
    titulo: 'Compass Flix',
    descricao:
      `
        O aplicativo compass flix foi feito para consultar os dados dos seus filmes preferidos. 
        Este projeto foi criado para aplicação em grupo do programa de estágio na Compass
      `,
    image: "../../../assets/projects/compass-flix.gif",
    color: "#00a3ff",
    github: "https://github.com/kleber-a/Compass-flix.gif",
    test: ""
  },
  {
    titulo: 'Computer-store',
    descricao:
      `
      Computer-store é um site de uma loja de informática desenvolvido em angular. 
      `,
    image: "../../../assets/projects/computer-store.PNG",
    color: "#a6fb98",
    github: "https://github.com/kleber-a/computer-store",
    test: "https://kleber-a.github.io/computer-store"
  },
  {
    titulo: 'Poke-Dex',
    descricao:
      `
      Uma aplicação que simula uma pokedex onde é possivel procurar os 
      pokemons pelo nome e acessar suas informações. 
      `,
    image: "../../../assets/projects/poke-dex.jpg",
    color: "#ff3a5e",
    github: "https://github.com/kleber-a/pokedex-angular",
    test: "https://pokedex-angular-eight-delta.vercel.app/"
  },

]