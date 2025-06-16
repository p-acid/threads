import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="bg-zinc-600">
      <Text className="text-zinc-200 text-xl">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
