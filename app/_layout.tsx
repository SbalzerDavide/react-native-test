import React from "react";
import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native";
import * as Linking from "expo-linking";
import Homepage from "./(tabs)/home";
import { Text } from "react-native";
import { Box } from "@/components/ui/box";
import MobileBottomTabs from "@/components/mobile-bottom-tabs";

import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";
import { SessionProvider } from "@/components/provider/session.provider";

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
    route: "home",
  },
  {
    icon: User,
    label: "About",
    route: "about",
  },
  {
    icon: Plus,
    label: "Listing",
  },
  {
    icon: MessageCircle,
    label: "Inbox",
    disabled: true,
  },
  {
    icon: SlidersHorizontal,
    label: "Profile",
  },
];

export default function RootLayout() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <SessionProvider>
        {/* top SafeAreaView */}
        <SafeAreaView
          className={`${
            colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"
          }`}
        />
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
          <GluestackUIProvider mode={colorMode}>
            <SafeAreaView
              className={`${
                colorMode === "light" ? "bg-white" : "bg-[#171717]"
              } flex-1 overflow-hidden`}
            >
              <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="loginPage" />
                <Stack.Screen name="not-found" />
              </Stack>
            </SafeAreaView>
          </GluestackUIProvider>
        </ThemeContext.Provider>
      </SessionProvider>
    </>
  );
}
