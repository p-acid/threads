import { supabase } from "@/libs/supabase";
import { Text, View } from "react-native";

export default function Profile() {
  async function signOut() {
    await supabase.auth.signOut();
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl text-white" onPress={signOut}>
        Sign Out
      </Text>
    </View>
  );
}
