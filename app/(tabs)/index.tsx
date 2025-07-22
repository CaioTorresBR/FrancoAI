import { Text, View, StyleSheet, Button } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// imports components
//import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import VoiceRecording from "@/components/VoiceRecording";

const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }) => {
  return (
  
    <Button 
      title="Go to Caio's profile"
      onPress={() => 
        navigation.navigate('Profile', {name: 'Caio'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
}


// creating the app Stack
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const PlaceholderImage = require("../../assets/images/quebec-logo.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={ PlaceholderImage }/>
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