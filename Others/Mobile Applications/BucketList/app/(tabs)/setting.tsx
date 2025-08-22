import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Link href="../">Go back</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#423f40ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
  }
});
