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
import ResidenciaScreen from './screens/ResidenciaScreen';
import FortuneScreen from './screens/FortuneScreen';
import LiliasScreen from './screens/LiliasScreen';
import EventInformationScreenJohn from './screens/EventInformationScreenJohn';
import EventInformationScreenCorporate from './screens/EventInformationScreenCorporate';
import EventInformationScreenMissy from './screens/EventInformationScreenMissy';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import EditEventScreen from './screens/EditEventScreen';
import CalendarScreen from './screens/CalendarScreen';




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
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="ResidenciaScreen" component={ResidenciaScreen} />
        <Stack.Screen name="FortuneScreen" component={FortuneScreen} />
        <Stack.Screen name="LiliasScreen" component={LiliasScreen}/>
        <Stack.Screen name="EventInformationScreenJohn" component={EventInformationScreenJohn} />
        <Stack.Screen name="EventInformationScreenCorporate" component={EventInformationScreenCorporate} />
        <Stack.Screen name="EventInformationScreenMissy" component={EventInformationScreenMissy} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="EditEventScreen" component={EditEventScreen} />
        <Stack.Screen name="CalendarScreen" component={CalendarScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
