import React from "react";
import { Stack } from "expo-router";

import "@/global.css";

export default function RootLayout() {
  return (
    <>
      <Stack 
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="contacts"
          options={{
            presentation: "modal",
            // headerShown: false,
          }}
        />
        <Stack.Screen
          name="info"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
      {/* <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack> */}
    </>
  );
}
