import { useAuth } from "@/providers/auth-provider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Redirect href="/(protected)/" />;
  }

  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen
        name="sign-up"
        options={{ headerBackButtonDisplayMode: "minimal", title: "Sign Up" }}
      />
    </Stack>
  );
}
