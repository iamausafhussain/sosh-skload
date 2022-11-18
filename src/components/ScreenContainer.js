import { SafeAreaView, ScrollView, View, StatusBar } from "react-native";

export function ScreenContainer({ children, classes = "", scroll = true }) {
  return (
    <SafeAreaView
      className={`h-full w-full pt-[${StatusBar.currentHeight}] ${classes}`}
    >
      {scroll ? <ScrollView>{children}</ScrollView> : <View>{children}</View>}
    </SafeAreaView>
  );
}
