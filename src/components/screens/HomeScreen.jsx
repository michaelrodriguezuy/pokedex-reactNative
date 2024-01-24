import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { usePokemonPaginate } from "../../hooks/usePokemonPaginate";
import PokemonCard from "../common/PokemonCard";


export default function HomeScreen() {
  const { pokemonList, loadPokemons } = usePokemonPaginate();

  return (
    <>
      <Image
        source={require("../../assets/pokebola.png")}
        style={styles.bgPokeBola}
      />

      {/* <Image source={{uri:""}}/> si tengo que usar una imagen de internet uso la propiedad uri */}
      {/* style={{width:100, height: 100}} los estilos son un objeto */}
      {/* <Image source={require("../../assets/pokebola.png")} style={styles.bgPokeBola}/> */}

      {pokemonList.length > 0 && (
        <View style={styles.containerList}>
          <FlatList
            data={pokemonList}
            numColumns={2}
            keyExtractor={(pokemon) => String(pokemon.id)} //el keyExtractor es para que cada item de la lista tenga un id unico, al igual que Key en react, en este caso tiene que ser si o si un string
            renderItem={({ item }) => <PokemonCard pokemon={item}/>  } //este es el item que viene de cada elemento del pokemonList
            ListHeaderComponent={<Text style={styles.title}> Pokedex</Text>}
            showsVerticalScrollIndicator={false}
            // onEndReached={loadPokemons}
            // onEndReachedThreshold={0.4}
            // columnWrapperStyle={{ justifyContent: "space-between" }}
            ListFooterComponent={<ActivityIndicator size="large" color="blue" />}
            onEndReached={loadPokemons}
            onEndReachedThreshold={0.3}
          />

        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  bgPokeBola: {
    width: 300,
    height: 300,
    position: "absolute",
    top: -130,
    right: -130,
    marginHorizontal: 20,
    opacity: 0.2,
  },
  containerList: {
    alignItems: "center",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000",
    alignSelf: "center",
    marginHorizontal: 20,
  },
});
