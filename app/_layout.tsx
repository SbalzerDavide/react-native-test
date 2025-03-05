import React from "react";
import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native";
import * as Linking from "expo-linking";
import Homepage from "./home";


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


export default function RootLayout() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (    <>
    {/* top SafeAreaView */}
    <SafeAreaView
      className={`${colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"}`}
    />
    <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
      <GluestackUIProvider mode={colorMode}>
        {/* bottom SafeAreaView */}
        <SafeAreaView
          className={`${
            colorMode === "light" ? "bg-white" : "bg-[#171717]"
          } flex-1 overflow-hidden`}
        >
          <Homepage />
        </SafeAreaView>
      </GluestackUIProvider>
    </ThemeContext.Provider>
  </>
)
  // return <GluestackUIProvider mode="light"><Stack /></GluestackUIProvider>;
}
