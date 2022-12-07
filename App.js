import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SkeletonComponent from "./src/screens/SkeletonComponent";
import timer from "react-native-timer";

const { width } = Dimensions.get("window");

export default function App() {
	const [isReady, setisReady] = useState(false);

	useEffect(() => {
		// let timer = setTimeout(() => setisReady(true), 2000);

		return () => {
			// clearTimeout(timer);
		};
	}, []);
	return (
		<View style={styles.container}>
			{isReady ? (
				<View>
					<Text>Skeleton Not Loaded!!</Text>
				</View>
			) : (
				<SkeletonComponent />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
