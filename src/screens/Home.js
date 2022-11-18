import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView } from "react-native";
import { Header, ScreenContainer } from "../components";
import { CircleButton } from "../components";
import { Slider } from "./Slider";

export function Home() {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({ headerShown: false });
  }, []);

  return (
    <ScreenContainer classes="pt-16 bg-white" scroll>
      <Header />
      <View className="px-2 pt-3">
        <ScrollView
          horizontal
          alwaysBounceVertical={false}
          showsHorizontalScrollIndicator={false}
          className="h-28"
        >
          <CircleButton title="Filter" />
          <CircleButton title="Nutrition" />
          <CircleButton title="Health" />
          <CircleButton title="Health" />
          <CircleButton title="Health" />
          <CircleButton title="Health" />
          <CircleButton title="Health" />
          <CircleButton title="Health" />
        </ScrollView>
      </View>
      <Slider />
    </ScreenContainer>
  );
}
