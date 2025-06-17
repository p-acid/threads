import "@/styles/global.css";

import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

import { AuthProvider } from "@/providers/auth-provider";
import { TanstackProvider } from "@/providers/tanstack-provider";

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "white",
    card: "#101010",
  },
};

export default function RootLayout() {
  return (
    <ThemeProvider value={theme}>
      <TanstackProvider>
        <AuthProvider>
          <Slot />
        </AuthProvider>
      </TanstackProvider>
    </ThemeProvider>
  );
}
