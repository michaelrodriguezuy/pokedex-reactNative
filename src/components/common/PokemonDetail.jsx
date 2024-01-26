import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PokemonDetail({ pokemon }) {
  return (
    <ScrollView
      style={{ ...StyleSheet.absoluteFillObject }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerGral}>
        <View>
          <Text style={styles.title}>Types</Text>
          {pokemon.types?.map(({ type }) => {
            return (
              <Text key={type.name} style={styles.typeText}>
                #{type.name}
              </Text>
            );
          })}
        </View>

        <View>
          <Text style={styles.title}>Sprites</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.miniPicture}
            />
            <Image
              source={{ uri: pokemon.sprites.back_default }}
              style={styles.miniPicture}
            />
            <Image
              source={{ uri: pokemon.sprites.front_shiny }}
              style={styles.miniPicture}
            />
            <Image
              source={{ uri: pokemon.sprites.back_shiny }}
              style={styles.miniPicture}
            />
          </ScrollView>
          <Text style={styles.title}> Peso</Text>
          <Text style={styles.typeText}> {pokemon.weight}</Text>

          <View>
            <Text style={styles.title}>Habilidades</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {pokemon.abilities?.map(({ ability }) => {
                return (
                  <Text key={ability.name} style={styles.typeText}>
                    #{ability.name}
                  </Text>
                );
              })}
            </View>
          </View>

          <View>
            <Text style={styles.title}>Movimientos</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {pokemon.moves?.map(({ move }) => {
                return (
                  <Text key={move.name} style={styles.typeText}>
                    #{move.name}
                  </Text>
                );
              })}
            </View>
          </View>

          <View style={{ marginBottom: 70 }}>
            <Text style={styles.title}>Stats</Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {pokemon.stats?.map(({ stat, base_stat }, i) => {
                return (
                  <View key={stat.name + i} style={{ flexDirection: "row" }}>
                    <Text style={{ ...styles.typeText, width: 150 }}>
                      {stat.name}
                    </Text>
                    <Text style={{ ...styles.typeText, fontWeight: "bold" }}>
                      {base_stat}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerGral: {
    marginHorizontal: 20,
    marginTop: 380,
    // flex: 1,
    // backgroundColor: "white",
    // borderTopRightRadius: 20,
    // borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
  },
  typeText: {
    fontSize: 20,
    marginRight: 5,
    // textTransform: "capitalize",
  },
  miniPicture: {
    width: 90,
    height: 90,
    // marginRight: 5,
    // marginTop: 10,
  },
  containerAbilities: {
    paddingBottom: 200,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "space-between",
  },
});
