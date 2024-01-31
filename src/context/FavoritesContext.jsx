import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavoritesContext = createContext();

export const FavoritesContextComponent = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // uso el useEffect para mantener los favoritos en caso de que ya exista alguno antes de inicar la app
  useEffect(() => {
    
    const getFavorites = async () => {
      
      try {
        const value = await AsyncStorage.getItem('favorites');
        const favoritos = value !== null ? JSON.parse(value) : [];
        setFavorites(favoritos);
      } catch (e) {
        throw e;
      }

    }
    getFavorites();
  }, []);
  

  const handleFavorites = (pokemon) => {
    const exist = favorites.some((fav) => fav.id === pokemon.id);

    if (exist) {
      //filter devuelve un nuevo arreglo con los elementos que cumplan la condicion, en este caso todos menos el que se clickeo
      const newArray = favorites.filter((fav) => fav.id !== pokemon.id)
      setFavorites(newArray);
      stroreData(newArray);
    } else {
      setFavorites([...favorites, pokemon]);
      stroreData([...favorites, pokemon]);
    }
  };

  // las funciones de async storage siempre devuelven una promesa por lo tanto son asincronicas
  const stroreData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('favorites', jsonValue);
    } catch (e) {
      console.log(e);
    }
  }


  let data = {
    favorites,
    handleFavorites,
  };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};
