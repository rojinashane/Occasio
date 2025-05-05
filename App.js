import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import AddEventScreen from './screens/AddEventScreen';
import EventPlacesScreen from './screens/EventPlacesScreen';


const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'LilyScriptOne': require('./assets/font/LilyScriptOne-Regular.ttf'),
    'Poppins-Bold': require('./assets/font/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/font/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/font/Poppins-Regular.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddEvent" component={AddEventScreen} />
        <Stack.Screen name="LogIn" component={LoginScreen} />
        <Stack.Screen name="EventPlaces" component={EventPlacesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
