export interface ICard {
  data: {
    name: string
    url: string
  }
}

export interface IPokemon {
  name: string
  sprites: {
    front_default: string
  }
  id: number
}
