import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

import MainTabNavigator from './TabNavigator';

import Onboarding from '../screens/onboarding/Index'
import Register from '../screens/register/Index'
import Login from '../screens/register/Login'
import Signup from '../screens/register/Signup'
import PickProfile from '../screens/register/PickProfile'
import ConfigProfile from '../screens/register/ConfigProfile'
import ConfigProfilePassword from '../screens/register/ConfigProfilePassword'

import AddRoom from '../screens/homepage/home/AddRoom'
import Room from '../screens/homepage/home/Room'

function MainStackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown: false, animation: "slide_from_right"}}>
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="ConfigProfile" component={ConfigProfile} />
                <Stack.Screen name="ConfigProfilePassword" component={ConfigProfilePassword} />
                <Stack.Screen name="PickProfile" component={PickProfile} />

                <Stack.Screen name="Homepage" component={MainTabNavigator}/>

                <Stack.Screen name="AddRoom" component={AddRoom} />
                <Stack.Screen name="Room" component={Room} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator