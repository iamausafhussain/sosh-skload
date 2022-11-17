import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import { Home, Slider } from "./src/screens"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slider">
        <Stack.Screen name="Sosh" component={Home} />
		<Stack.Screen name="Slider" component={Slider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
