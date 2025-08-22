import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1ec2f4ff',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="setting" />
    </Stack>
  );
}
