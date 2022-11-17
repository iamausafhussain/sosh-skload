import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, ScrollView } from "react-native";
import { Header, ScreenContainer } from "../components";
import { CircleButton } from "../components/CircleButton";

export function Home() {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({ headerShown: false });
  }, []);

  return (
    <ScreenContainer classes="pt-16">
      <Header />
      <View className="px-2 pt-3">
        <ScrollView
          horizontal={true}
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
    </ScreenContainer>
  );
}
