import { Tabs } from "expo-router";
// icons
import { Ionicons } from "@expo/vector-icons";

// This is the root layout for the app. It wraps all pages in a common layout. 
// Defines shared styles and components, like headers or footers.
export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarInactiveTintColor: "rgb(116, 155, 194)",
            tabBarActiveTintColor: "rgb(70, 130, 169)",
            headerStyle: {
                backgroundColor: "rgb(145, 200, 228)",
            },
            headerShadowVisible: false,
            headerTintColor: "white",
            tabBarStyle: {
                backgroundColor: "rgb(255, 251, 222)",
            },
        }}>

       {/*options are used to define shared styles or components for all screens in the stack*/}
      <Tabs.Screen 
        name="index"
        options={{
          headerTitle: "Franco AI",
          headerTitleAlign: "center",
          tabBarIcon: ({focused, color}) =>
            <Ionicons 
                name={focused ? "home-sharp" : "home-outline"}
                size={30}
                color="rgb(70, 130, 169)"
            />,
      }}/>
      
      <Tabs.Screen
      name="about"
      options={{
        headerTitle: "About Franco AI",
        headerTitleAlign: "center"
      }} />


     <Tabs.Screen
      name="settings"
      options={{
        headerTitle: "Settings",
        headerTitleAlign: "center",
        tabBarIcon: ({focused, color}) =>
            <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={30}
                color="rgb(70, 130, 169)"
            />
      }}
      />
    </Tabs>

 
    );
}
