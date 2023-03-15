import React from 'react';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from '../screens/UserList';
import UserDetails from '../screens/UserDetails';
import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.primary,
            },
            headerTintColor: 'white',
          }}>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Dashboard',
            }}
          />
          <Stack.Screen
            name="Users"
            component={UserList}
            options={{
              title: 'Users',
            }}
          />
          <Stack.Screen
            name="Details"
            component={UserDetails}
            options={{
              title: 'Details',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigator;
