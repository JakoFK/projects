import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Tu es ici</Text>
      <Link href="./(tabs)">Go to tabs</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
