import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 p-4 items-center justify-center">
      <Text className="text-xl text-white">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
