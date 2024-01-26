import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FavoritesContext } from "../../context/FavoritesContext";
import PokemonCard from "../common/PokemonCard";

export default function FavoriteScreen() {
  const { top } = useSafeAreaInsets();

  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={{ top: top + 20, alignItems:"center" }}>
      <FlatList
        data={favorites}
        numColumns={2}
        //el keyExtractor es para que cada item de la lista tenga un id unico, al igual que Key en react, en este caso tiene que ser si o si un string
        keyExtractor={(pokemon) => String(pokemon.id)}
        // keyExtractor={(pokemon, index) => String(index)}

        renderItem={({ item }) => <PokemonCard pokemon={item} />} //este es el item que viene de cada elemento del pokemonList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              top: top,
              marginBottom: 30,
              paddingBottom: 10,
              fontSize: 35,
              fontWeight: "bold",
              marginHorizontal: 20,
            }}
          >
            Mis favoritos
          </Text>
        }
        // onEndReached={loadPokemons}
        // onEndReachedThreshold={0.4}
        // columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}
