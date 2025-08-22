import {Tabs} from "expo-router";


export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#bbf41eff',
        },
        tabBarActiveBackgroundColor: '#aab7bbff',
      }}>
      <Tabs.Screen name="details" />
    </Tabs>
  );
}
