import { Text, View } from "react-native";

export function CircleButton({title}) {
  return (
    <View className="bg-amber-200 border rounded-full w-20 h-20 relative mx-2">
      <Text className="absolute -bottom-6 text-center w-full">{title}</Text>
    </View>
  );
}
