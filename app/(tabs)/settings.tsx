import { Text, View, StyleSheet } from "react-native";

export default function settingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Settings screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container style is an object
  container: {
    backgroundColor: "rgb(145, 200, 228)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "rgb(116, 155, 194)",
  }
});