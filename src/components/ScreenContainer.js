import { SafeAreaView, View, StatusBar } from "react-native";

export function ScreenContainer(props) {
    const {children, classes, ...rest} = props;
  return (
    <SafeAreaView className={`h-full w-full pt-[${StatusBar.currentHeight}] ${classes}`} {...rest}>
      <View>{children}</View>
    </SafeAreaView>
  );
}
