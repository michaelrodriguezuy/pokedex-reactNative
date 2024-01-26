import axios from "axios";
import { useEffect, useState } from "react";

const usePokemon = (id) => {
  const [pokemon, setPokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const loadPokemons = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(res.data);
      setIsLoading(false); //cuando termina de cargar el pokemon, setea el loading en false
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return { pokemon, isLoading };
};

export default usePokemon;
