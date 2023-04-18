//Project is still in progress. It is for my senior project
//Bottom Tag Navigation and Stack Navigation
//Navigation.js


import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import AccountScreen from './screens/AccountScreen';
import SettingsScreen from './screens/SettingsScreen';
import FormScreen from './screens/FormScreen';
import BuyerAccountScreen from './screens/BuyerAccountScreen';
import SellerAccountScreen from './screens/SellerAccountScreen';


const HomeStack = createNativeStackNavigator();

function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen}/>
            <HomeStack.Screen name="Form" component={FormScreen}/>
        </HomeStack.Navigator>
    );
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen(){
    return(
        <AccountStack.Navigator>
            <AccountStack.Screen name="Account" component={AccountScreen}/>
            <AccountStack.Screen name="BuyerAccount" component={BuyerAccountScreen}/>
            <AccountStack.Screen name="SellerAccount" component={SellerAccountScreen}/>
        </AccountStack.Navigator>
    );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen(){
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Settings" component={SettingsScreen}/>
        </SettingsStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

export default function FinalNavigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreen} options={{
                    headerShown: false, 
                    title: "Home", 
                    tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name="home-outline" size={size} color={color}/>
                    ),
                    }}/>
                <Tab.Screen name="Account" component={AccountStackScreen} options={{
                    headerShown: false,
                    title: "Account",
                    tabBarIcon: ({focused, color, size}) => (
                        <Ionicons name="person-circle-outline" size={size} color={color}/>
                        ),
                    }}/>
                <Tab.Screen name="Settings" component={SettingsStackScreen} options={{
                    headerShown: false,
                    title: "Settings",
                    tabBarIcon: ({focused, color, size}) => (
                        <Ionicons name="settings-outline" size={size} color={color}/>
                        ),
                    }}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}

//HomeScreen.js
import * as React from 'react';
import {Text, SafeAreaView} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#42EC95'}}>Welcome to SMSecurePay</Text>
            <Ionicons name="chatbox-ellipses-outline" size={100} color='#42EC95'/>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Form')}
            style={{
                backgroundColor: '#42EC95', 
                padding: 20,
                width:210,
                borderRadius:5, 
                flexDirection:'row', 
                justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight:'bold', fontSize:18, color: '#fff', fontFamily:'Thonburi-Bold'}}>Start Transaction</Text>
                <Ionicons name="arrow-redo-outline" size={22} color='#fff'/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

//AccountScreen.js

import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AccountScreen({navigation}) {
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
            <TouchableOpacity
                onPress={() => navigation.navigate('BuyerAccount')}
                style={{
                backgroundColor: '#42EC95', 
                padding: 20,
                width:270,
                borderRadius:5, 
                flexDirection:'row', 
                justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight:'bold', fontSize:18, color: '#fff', fontFamily:'Thonburi-Bold'}}>Create Buyer Account</Text>
                <Ionicons name="cash-outline" size={22} color="#fff"/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SellerAccount')}
                style={{
                backgroundColor: '#42EC95', 
                padding: 20,
                width:270,
                borderRadius:5, 
                flexDirection:'row', 
                justifyContent: 'space-between',
                }}>
                <Text style={{fontWeight:'bold', fontSize:18, color: '#fff', fontFamily:'Thonburi-Bold'}}>Create Seller Account</Text>
                <Ionicons name="pricetag-outline" size={22} color="#fff"/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

//SettingsScreen.js
import * as React from 'react';
import {View, Text} from 'react-native';

export default function SettingsScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Settings" Screen')}
                style={{fontSize: 26, fontWeight: 'bold'}}>Settings Screen</Text>
        </View>
    );
}

//FormScreen.js
import * as React from 'react';
import {Text, TextInput, View, Button, SafeAreaView} from 'react-native';

export default function FormScreen({navigation}){
    return(
        <SafeAreaView style={{flex: 3, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text style={{fontSize: 20, fontFamily: 'Thonburi-Bold'}}>
                Please Fill Out The Following Fields:
            </Text>
            <View style={{}}>
                <TextInput style={{backgroundColor: '#1632C1', width: 200, padding: 10, borderRadius: 20,}} placeholder="Phone Number"/>
            </View>
            <View>
                <TextInput style={{backgroundColor: '#1632C1', width:200, padding: 10, borderRadius: 20}} placeholder="Amount"/>
            </View>
            <View>
                <TextInput style={{backgroundColor: '#1632C1', width:200, padding:10, borderRadius: 20}} placeholder="Customer Card Number"/>
            </View>
            <View>
                <Button title='Send Message'/>
            </View>
        </SafeAreaView>
    );
}

//BuyerAccountScreen.js
import * as React from 'react';
import {View, Text} from 'react-native';

export default function BuyerAccountScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Settings" Screen')}
                style={{fontSize: 26, fontWeight: 'bold'}}>Buyer Account Screen</Text>
        </View>
    );
}

//SellerAccountScreen.js
import * as React from 'react';
import {View, Text} from 'react-native';

export default function SellerAccountScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Settings" Screen')}
                style={{fontSize: 26, fontWeight: 'bold'}}>Seller Account Screen</Text>
        </View>
    );
}

//
