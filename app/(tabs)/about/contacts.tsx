import { Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";


const ContactsScreen = () => {
  return (
    <>
    <Stack.Screen options={{ headerTitle: "about contacts" }}/>
    <View className="flex-1 justify-center items-center">
      <Text>Contacts</Text>
    </View>
    </>
  );
}

export default ContactsScreen