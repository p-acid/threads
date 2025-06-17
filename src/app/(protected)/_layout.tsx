import { useAuth } from "@/providers/auth-provider";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="new"
        options={{
          title: "New thread",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
