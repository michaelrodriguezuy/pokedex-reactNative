import axios from "axios";
import { useEffect, useState } from "react";

//va a ser un custom hook, no un componente
export const usePokemonPaginate = () => {
  const POKEMON_TYPE_COLORS = {
    normal: "#A8A878",
    fighting: "#C03028",
    flying: "#A890F0",
    poison: "#A040A0",
    ground: "#E0C068",
    rock: "#B8A038",
    bug: "#A8B820",
    ghost: "#705898",
    steel: "#B8B8D0",
    fire: "#FA6C6C",
    water: "#6890F0",
    grass: "#48CFB2",
    electric: "#FFCE4B",
    psychic: "#F85888",
    ice: "#98D8D8",
    dragon: "#7038F8",
    dark: "#705848",
    fairy: "#EE99AC",
  };

  const [pokemonList, setPokemonList] = useState([]);
  //   console.log("pokemonList:", pokemonList);

  const [nextPageUrl, setNextPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  //al ser una peticion tiene que ser async, cargo de a 10 pokemons
  const loadPokemons = async () => {
    try {
      const res = await axios.get(nextPageUrl);
      setNextPageUrl(res.data.next);
      mapPokemons(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  //por cada pokemon que mapeo traigo su detalle gracias a su url
  const pokemonDetailByUrlApi = async (url) => {
    try {
      const res = await axios.get(url);
      // console.log("datos del pokemon:",res.data);
      return res.data;
    } catch (error) {
      throw error;
    }
  };

  //recorro cada uno de los pokemones y los mapeo
  const mapPokemons = async (pokemons) => {
    try {
      const newPokemonList = [];
      for await (const pokemon of pokemons) {
        const pokemonDetail = await pokemonDetailByUrlApi(pokemon.url);
        newPokemonList.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          //   picture: pokemonDetail.sprites.other.dream_world.front_default,
          picture:
            pokemonDetail.sprites.other["official-artwork"].front_default, //en este ejemplo vemos como acceder a un objeto que tiene un guion medio
          color:
            POKEMON_TYPE_COLORS[pokemonDetail.types[0].type.name.toLowerCase()], //el type va en corchetes porque es un string
        });
      }
      // setPokemonList([...pokemonList, ...newPokemonList]);  //esta es una forma de setear el estado, lo que ya tenia mas lo nuevo
      setPokemonList((prevState) => [...prevState, ...newPokemonList]); //esta es otra forma de setear el estado, usando callback
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { pokemonList, loadPokemons }; //retorno el listado inicial de pokemones y la funcion para cargar mas cuando hago scroll y llego al final del listado
};
