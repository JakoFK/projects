import { Stack } from "expo-router";
import Index from "./(tabs)";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ title: "Settings" }}
      />
      <Stack.Screen 
        name="(tabs)"
        options={{ headerShown: false }}
        />
    </Stack>
  );
}