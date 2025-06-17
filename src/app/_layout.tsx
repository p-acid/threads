import "@/styles/global.css";

import { Slot } from "expo-router";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

import { AuthProvider } from "@/providers/auth-provider";

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
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
}
