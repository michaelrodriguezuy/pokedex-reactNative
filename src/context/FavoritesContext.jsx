import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesContextComponent = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (pokemon) => {
    const exist = favorites.some((fav) => fav.id === pokemon.id);

    if (exist) {
      //filter devuelve un nuevo arreglo con los elementos que cumplan la condicion, en este caso todos menos el que se clickeo
      setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
    } else {
      setFavorites([...favorites, pokemon]);
    }
  };

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
