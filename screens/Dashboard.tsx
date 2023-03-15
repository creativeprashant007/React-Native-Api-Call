import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Setting from './Setting';



const Tab = createBottomTabNavigator();
function Dashboard(props:any) {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options  = {
            {headerShown:false,}
        }  />
        <Tab.Screen name="Settings" component={Setting} options = {{headerShown:false}} />
      </Tab.Navigator>
    );
}

export default Dashboard;
const styles = StyleSheet.create({
    
})