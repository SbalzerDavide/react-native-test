import React from "react";
import { Stack, Tabs } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native";
import * as Linking from "expo-linking";
import { Box } from "@/components/ui/box";
import { Icon } from "@/components/ui/icon";

import MobileBottomTabs from "@/components/mobile-bottom-tabs";

import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";

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

export default function TabsLayout() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      {/* top SafeAreaView */}
      <GluestackUIProvider mode={colorMode}>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "#e91e63",
            // headerStyle: { height: 50 }, // Adjust header height
            // headerTitleStyle: { color: colorMode === "light" ? "#000" : "#fff" }, // Ensure header text is visible
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              headerTitle: "My homepage",
              // prevent the back button from showing
              headerLeft: () => <></>,
            }}
          />
          <Tabs.Screen
            name="home"
            options={{
              headerTitle: "My homepage",
              tabBarIcon: ({ color }) => (
                <Icon as={Home} size={"sm"} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="about"
            options={{
              headerTitle: "My about screen",
              tabBarIcon: ({ color }) => (
                <Icon as={User} size={"sm"} color={color} />
              ),
              // presentation: "modal",
            }}
          />
        </Tabs>
        {/* <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
                <MobileBottomTabs
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  bottomTabs={bottomTabs}
                />
              </Box> */}
      </GluestackUIProvider>
    </>
  );
}
