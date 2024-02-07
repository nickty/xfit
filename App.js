import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-black-100">
      <Text>app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
