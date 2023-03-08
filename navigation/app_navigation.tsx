import React from 'react';
import Colors from '../constants/Colors';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import UserList from '../screens/UserList';
import UserDetails from '../screens/UserDetails';

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
            name="Home"
            component={UserList}
            options={{
              title: 'Home',
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
