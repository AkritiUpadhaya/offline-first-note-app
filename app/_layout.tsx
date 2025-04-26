import { Stack } from 'expo-router'

export default function rootLayout() {
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerTitle:'Home'}} />
        <Stack.Screen name='note' options={{headerTitle:'Note'}} />
    </Stack>
  )
}