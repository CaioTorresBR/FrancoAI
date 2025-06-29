import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{title: "Oops! Not found"}}/>
    <View style={styles.container}>
      <Text style={styles.text}> Hi, Caio.</Text>
      {/* "/" brings us to the root of the app, which is the index.tsx file */}
      <Link href={"/(tabs)/index"} style={styles.button}>
      Go back to Home Screen
      </Link>
    </View>
    </>
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
  button: {
    color: "white",
    fontSize: 20,
    textDecorationLine: "underline",

  }
});