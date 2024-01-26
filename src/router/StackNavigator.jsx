import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/screens/HomeScreen';
import PokemonScreen from '../components/screens/PokemonScreen';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false, cardStyle: "white"}}>
        {/* en react native la primer ruta que se ponga es la primera que aparece, no hay que especificar una por defecto */}

        {/* el name = path de react y el component es igual a element de react */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
    
  )
}