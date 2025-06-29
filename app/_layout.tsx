import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {LogBox} from "react-native";
// This is the root layout for the app. It wraps all pages in a common layout. 
// Defines shared styles and components, like headers or footers.

LogBox.ignoreAllLogs(true); // Ignores all log messages, useful for development to avoid cluttering the console


export default function RootLayout() {
  return (

    <>
      <StatusBar style="light"/> {/* Sets the status bar style to light */}
      <Stack>
        {/*options are used to define shared styles or components for all screens in the stack*/}
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerShown: false, // Hides the header for the tabs layout
          }}
        />
        <Stack.Screen name="+not-found" options={{}}/>
      </Stack>
    </>
    );
}
