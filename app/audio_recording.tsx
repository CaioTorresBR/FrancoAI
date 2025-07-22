import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";

export default function AudioRecording() {
  // storing locally using expo-secure-store
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  const saveSecureValue = async() => {
    await SecureStore.setItemAsync(key, value);
    setKey;
    setValue;
  };
  
  const retrieveSecureValue = async() => {
    let result = await SecureStore.getItemAsync(key);
    setValue(result);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Audio Recording screen</Text>
      <TextInput value={key} onChangeText={setKey} placeholder="Key"/>
      <TextInput value={value} onChangeText={setValue} placeholder="Value"/>
      <Button title="Save Key and Value" onPress={saveSecureValue}/>
      <Button title="Retrieve Key and Value" onPress={retrieveSecureValue}/>
      <StatusBar style="auto"/>
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