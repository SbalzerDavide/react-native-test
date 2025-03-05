import { Text } from "react-native";
import { Box } from "@/components/ui/box";
import MobileBottomTabs from "./mobile-bottom-tabs"

import {
  Plus,
  Home,
  MessageCircle,
  User,
  SlidersHorizontal,
} from "lucide-react-native";

import React from "react";

const bottomTabs = [
  {
    icon: Home,
    label: "Home",
  },
  {
    icon: SlidersHorizontal,
    label: "Filter",
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
    icon: User,
    label: "Profile",
  },
];

const Homepage = () => {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <>
      <Box className="flex-1">
        <Box className="flex-1 justify-center items-center">
          <Text className="text-typography-900 text-2xl">Homepage</Text>
        </Box>
        {/* mobile bottom tabs */}
        <Box className="h-[72px] items-center w-full flex md:hidden border-t border-outline-50">
          <MobileBottomTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            bottomTabs={bottomTabs}
          />
        </Box>
      </Box>
      {/* )} */}
    </>
  );
};

export default Homepage;
