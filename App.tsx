/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Users} from './model/users';
import axios, {AxiosResponse} from 'axios';

function App(): JSX.Element {
  const [userData, setUserData] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        console.log('Response:', response.data);
        setUserData(response.data);
      });
  }, []);
  return <View></View>;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
