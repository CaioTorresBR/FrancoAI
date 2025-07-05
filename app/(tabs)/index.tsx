import { Text, View, StyleSheet } from "react-native";

// imports components
import Button from '@/components/Button'
import ImageViewer from "@/components/ImageViewer";
import VoiceRecording from "@/components/VoiceRecording"

const PlaceholderImage = require("../../assets/images/quebec-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo"/>
        <Button label="Use this photo"/>
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
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: "center",
  },
});