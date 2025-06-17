import { supabase } from "@/libs/supabase";
import { useAuth } from "@/providers/auth-provider";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewScreen() {
  const [text, setText] = useState("");

  const { user } = useAuth();

  const onSubmit = async () => {
    if (!text) return;

    if (user) {
      const { error } = await supabase
        .from("posts")
        .insert({ content: text, user_id: user.id });

      if (error) {
        console.error(error);
      }
    }

    setText("");
  };

  return (
    <SafeAreaView edges={["bottom"]} className="flex-1 p-4">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 140 : 0}
      >
        <Text className="text-bold text-lg text-white">{user?.email}</Text>

        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="What is on your mind?"
          className="tgext-lg text-white"
          multiline
          numberOfLines={4}
        />

        <View className="mt-auto">
          <Pressable
            onPress={onSubmit}
            className="self-end rounded-full bg-white px-6 py-3 "
          >
            <Text className="font-bold text-black">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
