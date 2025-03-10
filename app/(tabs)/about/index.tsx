import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";


const AboutScreen = () => {
  return (
    <>
    <Stack.Screen options={{ 
      headerTitle: "Oops!" ,
      headerShown: false
      }}/>
    <View className="flex-1 justify-center items-center">
      <Text>Index about</Text>
      <Link href="/about/contacts" className="underline text-blue-500">Go to contacts</Link>
      <Link href="/about/info" className="underline text-blue-500">Go to info</Link>
    </View>
    </>
  );
}

export default AboutScreen