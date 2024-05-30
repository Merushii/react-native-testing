import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// npx expo install jest-expo jest
// npm install --save-dev @testing-library/react-native

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mi primera prueba unitaria en React Native con Jesr Testing </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
