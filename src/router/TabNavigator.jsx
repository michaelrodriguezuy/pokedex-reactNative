import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from "./StackNavigator";
import FavoriteScreen from "../components/screens/FavoriteScreen";

import { FontAwesome } from "@expo/vector-icons";

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#5856D5",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 10,
          //   backgroundColor: "rgba(255,255,255,0.92)",
          borderWidth: 0,
          elevation: 0,
          height: 60,
          // bottom: 10,
          // left: 10,
          // right: 10,
          // borderRadius: 10,
          // height: 50,
          // ...styles.shadow,
        },
      }}
    >
      {/* los botones que se ven debajo, por ejemplo el primero accede a todo el stack que tiene StackNavigator */}
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarLabel: "Pokemones",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="list" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen name="Pokemon" component={PokemonScreen} /> */}
    </Tab.Navigator>
  );
}
