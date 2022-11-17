import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Slider from "./src/screens/Slider";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="Slider" component={Slider} />
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
