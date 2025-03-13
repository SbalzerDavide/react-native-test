import { Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";


const InfoScreen = () => {
  return (
    <>
    <Stack.Screen options={{ 
      headerTitle: "Oops!",
      headerShown: false
       }}/>
    <View className="flex-1 justify-center items-center">
      <Text>Info</Text>
    </View>
    </>
  );
}

export default InfoScreen