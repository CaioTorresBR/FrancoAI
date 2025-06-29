import { Text, View, StyleSheet } from "react-native";

export default function AudioRecording() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Audio Recording screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // container style is an object
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});