import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator()
import HomeIndex from '../screens/homepage/home/Index'
import ProfileIndex from '../screens/homepage/profile/Index'
import Colors from '../constants/Colors';

function MainTabNavigator({route}){
    return(
        <Tab.Navigator
            activeColor={Colors.Green500}
            inactiveColor="#C4E9DF"
            barStyle={{ backgroundColor: 'white' }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    paddingBottom: 6,
                    height: 60,
                },
                tabBarLabelStyle: {
                    marginTop: 4,
                    fontSize: 12
                },
            }}
        >
            <Tab.Screen 
                initialParams={{id:route.params.id, email:route.params.email, color:route.params.color}}
                options={{
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="home" color={color}  size={24} />
                    )
                }} 
                name="Home" 
                component={HomeIndex} 
            />
            <Tab.Screen 
                initialParams={{id:route.params.id, email:route.params.email, color:route.params.color}}
                options={{
                    tabBarIcon:({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={24} />
                    )
                }} 
                name="Profile" 
                component={ProfileIndex}
            />
        </Tab.Navigator>
    )
}

export default MainTabNavigator