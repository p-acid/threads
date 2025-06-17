import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { supabase } from "@/libs/supabase";
import { useAuth } from "@/providers/auth-provider";

const createPost = async ({
  content,
  user_id,
}: {
  content: string;
  user_id: string;
}) => {
  const { data, error } = await supabase
    .from("posts")
    .insert({ content, user_id })
    .select("*")
    .throwOnError();

  if (error) {
    console.error(error);
  }

  return data;
};

export default function NewScreen() {
  const [text, setText] = useState("");

  const { user } = useAuth();

  const queryClient = useQueryClient();

  const { mutate, error, isPending } = useMutation({
    mutationFn: () => createPost({ content: text, user_id: user!.id }),
    onSuccess: () => {
      setText("");
      router.back();
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      Alert.alert(error.message);
    },
  });

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

        <Text className="text-base text-red-500">{error?.message}</Text>

        <View className="mt-auto">
          <Pressable
            onPress={() => mutate()}
            disabled={isPending}
            className="self-end rounded-full bg-white px-6 py-3 "
          >
            <Text className="font-bold text-black">Post</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
