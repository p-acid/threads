import { supabase } from "@/libs/supabase";
import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signUpWithEmail = async () => {
    if (!email || !password) {
      Alert.alert("이메일 혹은 패스워드를 입력해주세요");
      return;
    }

    try {
      setIsLoading(true);

      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({ email, password });

      if (error) Alert.alert(error.message);
      if (!session) Alert.alert("이메일 형식을 확인해주세요");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 items-center justify-center gap-3 bg-neutral-900 px-6">
      <Text className="mb-8 text-3xl font-bold text-white">회원가입</Text>

      <View className="mb-2 w-full">
        <Text className="mb-1 text-sm text-white">이메일</Text>
        <TextInput
          className="rounded-lg bg-neutral-800 p-4 text-white"
          placeholder="이메일을 입력해주세요"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="mb-4 w-full">
        <Text className="mb-1 text-sm text-white">비밀번호</Text>
        <TextInput
          className="rounded-lg bg-neutral-800 p-4 text-white"
          placeholder="비밀번호를 입력해주세요"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        disabled={isLoading}
        className="w-full items-center rounded-lg bg-white py-3"
        onPress={signUpWithEmail}
      >
        <Text className="text-lg font-semibold text-black">회원가입</Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row items-center justify-center">
        <Text className="text-base text-white">이미 계정이 있으신가요? </Text>
        <Link href="/login" asChild>
          <Pressable>
            <Text className="font-medium text-blue-400">로그인</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
