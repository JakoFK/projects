import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f41ec6ff',
      },
    }}>
      <Stack.Screen name="(hey)" 
      options={{
        headerShown: true,
        title: 'Home',
      }}/>
      <Stack.Screen name="(tabs)" options={{
        headerShown: true,
        title: 'Settings',
      }}/>
    </Stack>
  );
}