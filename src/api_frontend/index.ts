import axios from "axios";
import { IPokemonRes } from "../../types";
import { trimObjects } from "../../utils/global_functions";
import { trimPokemonFields } from "../../utils/global_vars";

export  const fetchPokemon = async (pokemonName: string) => {
  const {data: poke } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const {data: species} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}/`)

  const color = species.color.name;
  trimObjects(poke, trimPokemonFields)

  return {...poke, color}

}

export const fetchPokemonList = async () => {

  const randomOffset = Math.floor(Math.random() * 800) - 10;
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=10`)

  const pokemonInfoArr = await Promise.all(data.results.map( async (pokemon: IPokemonRes) => {
    const poke = await fetchPokemon(pokemon.name);

    return poke
  }))

  return pokemonInfoArr
}

export const fetchInitialPokemon = async () => {
    const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1154`)
    const filteredNameList = data.results.map((pokemon: IPokemonRes) => pokemon.name)
    return filteredNameList
}



