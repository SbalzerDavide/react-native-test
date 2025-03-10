import { Link } from "expo-router";
import { Stack } from "expo-router"
import { View } from "react-native"
import { Text } from "react-native"

const NotFoundScreen = () => {
  return (
    <>
    <Stack.Screen options={{ headerTitle: "Oops!" }}/>
    <View className="flex-1 justify-center items-center">
      <Text>Not Found</Text>
      <Link href="/" className="underline text-blue-500">Go back to the homepage</Link>
    </View>
    </>
  )
}

export default NotFoundScreen