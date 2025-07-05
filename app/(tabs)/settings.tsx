import { Text, View, StyleSheet } from "react-native";
import VoiceRecording from "@/components/VoiceRecording";
import Correction from "@/components/Correction"

const text_audio = "Je me appele Pedro y je suis 15 ans."

export default function settingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Settings screen</Text>
      <View style={styles.container}>
        <Text>{Correction(text_audio)}</Text>
      </View>
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
  },
});