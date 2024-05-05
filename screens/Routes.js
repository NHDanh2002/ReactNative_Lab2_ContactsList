import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../screens/Contacts';
import Profile from '../screens/Profile';
import colors from '../utility/colors';
import {MaterialIcons} from '@expo/vector-icons';
import Favorites from './Favorites';
import User from './User';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const getTabBarIcon = icon => ({tintColor}) => (
    <MaterialIcons name={icon} size={26} style={{color:tintColor}}/>
);

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();
const ContactsScreens = () => {
    return(
        <Stack.Navigator
            initialRouteName='Contacts'
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: {backgroundColor: 'tomato'},
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen name='Contacts' component={Contacts} options={{title:"Contacts"}}/>
            <Stack.Screen
                name='Profile'
                component={Profile}
                options={({route}) =>{
                    const {contact} = route.params;
                    const {name} = contact;
                    return {
                        title: name.split(' ')[0],
                        headerTintColor: 'black',
                        headerStyle: {
                            backgroundColor:colors.blue,
                        }
                    };
                }}
            />
        </Stack.Navigator>
    );
}
const FavoritesScreens = ()=>{
    return(
        <Stack.Navigator
            initialRouteName='Favorites'
        >
            <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
            <Stack.Screen name='Profile' component={Profile} options={{title:"Profile"}}/>
        </Stack.Navigator>
    );
}
const UserScreens = ({navigation}) => {
    return(
        <Stack.Navigator
            initialRouteName='User'
        >
            <Stack.Screen name='User' component={User}/>
        </Stack.Navigator>
    );
}
const Tab = createMaterialBottomTabNavigator();
const Routes = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ContactsScreens'
                barStyle= {{backgroundColor: colors.blue}}
                labeled= {false}
                activeColor={colors.greyLight}
                inactiveColor={colors.greyDark}
            >
                <Tab.Screen name='ContactsScreens' component={ContactsScreens}
                    options={{
                        tabBarLabel: "ContactList",
                        tabBarIcon: getTabBarIcon('list')
,                    }}
                />
                <Tab.Screen name='FavoritesScreens' component={FavoritesScreens}
                    options={{
                        tabBarLabel: "Favorite",
                        tabBarIcon: getTabBarIcon('star'),
                    }}
                />
                <Tab.Screen name='UserScreens' component={User}
                    options={{
                        tabBarLabel: "User",
                        tabBarIcon: getTabBarIcon('account-circle'),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Routes;
/*const Routes = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Contacts'
                screenOptions={{
                    headerTintColor: 'white',
                    headerStyle: {backgroundColor: 'tomato'},
                    headerTitleAlign: 'center',
                }}
            >
                <Stack.Screen name='Contacts' component={Contacts} options={{title:"Contacts"}}/>
                <Stack.Screen 
                    name='Profile' 
                    component={Profile} 
                    options={({route})=>{
                        const {contact} = route.params;
                        const {name} = contact;
                        return{
                            title: name.split(' ')[0],
                            headerTintColor: 'white',
                            headerStyle: {
                                backgroundColor: colors.blue,
                            }
                        };
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;*/
