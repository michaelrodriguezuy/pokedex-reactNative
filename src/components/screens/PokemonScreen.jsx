import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import usePokemon from "../../hooks/usePokemon";

import { AntDesign } from "@expo/vector-icons";
import PokemonDetail from "../common/PokemonDetail";
import { FavoritesContext } from "../../context/FavoritesContext";

export default function PokemonScreen({ route, navigation }) {
  const { top } = useSafeAreaInsets();
  const { pokemonSelected } = route.params;

  const { pokemon, isLoading } = usePokemon(pokemonSelected.id);
  const { handleFavorites, favorites } = useContext(FavoritesContext);


  const isInFavorites = favorites?.some(
    (elemento)=>elemento.id === pokemonSelected.id
  );

  return (
    <View style={{ flex: 1 }}>
      {/* con el flex 1 le digo que ocupe todo el espacio disponible */}
      {/* aca va el header */}
      <View
        style={{ ...styles.container, backgroundColor: pokemonSelected.color }}
      >
        <TouchableOpacity
          style={{ ...styles.backButton, top: top + 15 }}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={30} color="white" />

          {/* el detalle del pokemon */}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.favoriteIcon, top: top + 15 }}
          onPress={() => handleFavorites(pokemonSelected)}
        >
          <AntDesign
            name="heart"
            size={30}
            color={isInFavorites ? "red" : "white"}
          />

          {/* el detalle del pokemon */}
        </TouchableOpacity>

        <Text style={{ ...styles.title, top: top + 50 }}>
          {pokemonSelected.name + "\n"} #{pokemonSelected.id}
        </Text>

        <Image
          style={styles.pokeball}
          source={require("../../assets/pokebola-blanca.png")}
        />
        <Image
          style={styles.picture}
          source={{ uri: pokemonSelected.picture }}
        />
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <PokemonDetail pokemon={pokemon} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 370,
    zIndex: 999,
    alignItems: "center",
    borderBottomRigthRadius: 1000,
    borderBottomLeftRadius: 1000,
    backgroundColor: "steelblue",
  },
  backButton: {
    position: "absolute",
    left: 20,
    zIndex: 999,
    // width: 100,
    // height: 60,
    // backgroundColor: "steelblue",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  favoriteIcon: {
    position: "absolute",
    right: 20,
    zIndex: 999,
    // width: 100,
    // height: 60,
    // backgroundColor: "steelblue",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  title: {
    color: "white",
    fontSize: 40,
    alignSelf: "flex-start",
    left: 30,
    // fontWeight: "bold",
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.3,
  },
  picture: {
    width: 250,
    height: 250,
    position: "absolute",
    bottom: -15,
    // left: 140,
  },
});
