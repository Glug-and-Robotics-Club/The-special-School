// App.js
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "./components/Dashboard";
import 'react-native-swiper-flatlist';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* Add screens for Hindi, English, and Maths courses here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
