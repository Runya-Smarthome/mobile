import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './screens/onboarding/Index';
import Register from './screens/register/Index';
import Login from './screens/register/Login';
import Signup from './screens/register/Signup';
import Homepage from './screens/home/Index';
import PickProfile from './screens/register/PickProfile';
import ConfigProfile from './screens/register/ConfigProfile';
import ConfigProfilePassword from './screens/register/ConfigProfilePassword';
import Profile from './screens/profile/Index';
import ManageProfile from './screens/profile/ManageProfile';
import AddNewProfile from './screens/profile/AddNewProfile';
import MemberOwnerAccess from './screens/profile/MemberOwnerAccess';
import AllowedRooms from './screens/profile/AllowedRooms';

export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });


  const Stack = createNativeStackNavigator();

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false, animation: "slide_from_right"}}>
        <Stack.Screen  name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="PickProfile" component={PickProfile} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ConfigProfile" component={ConfigProfile} />
        <Stack.Screen name="ConfigProfilePassword" component={ConfigProfilePassword} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ManageProfile" component={ManageProfile} />
        <Stack.Screen name="AddNewProfile" component={AddNewProfile} />
        <Stack.Screen name="MemberOwnerAccess" component={MemberOwnerAccess} />
        <Stack.Screen name="AllowedRooms" component={AllowedRooms} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
