import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, {
	block,
	Clock,
	EasingNode,
	startClock,
	set,
	useCode,
	Value,
	cond,
	timing,
	eq,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const AnimatedLG = Animated.createAnimatedComponent(LinearGradient);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});

const SkeletonComponent = ({ children, styles }) => {
	const animatedValue = new Animated.Value(0);
	const clock = new Clock();

	const runTiming = (clock) => {
		const state = {
			finished: new Value(0),
			position: new Value(0),
			frameTime: new Value(0),
			time: new Value(0),
		};
		const config = {
			toValue: new Value(1),
			duration: 1000,
			easing: EasingNode.inOut(EasingNode.ease),
		};
		return block([
			timing(clock, state, config),
			cond(eq(state.finished, 1), [
				set(state.finished, 0),
				set(state.position, 0),
				set(state.frameTime, 0),
				set(state.time, 0),
			]),
			state.position,
		]);
	};

	useCode(
		() => block([startClock(clock), set(animatedValue, runTiming(clock))]),
		[clock, animatedValue]
	);

	const translateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [-width * 2, width * 2],
	});

	return (
		<View
			style={{
				backgroundColor: "#a0a0a0",
				borderColor: "#b0b0b0",
				height: 150,
				width: width,
			}}>
			<AnimatedLG
				colors={["#a0a0a0", "#b0b0b0", "#b0b0b0", "#a0a0a0"]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={{
					...StyleSheet.absoluteFill,
					transform: [{ translateX: translateX }],
				}}
			/>
			{children}
		</View>
	);
};

export default SkeletonComponent;
