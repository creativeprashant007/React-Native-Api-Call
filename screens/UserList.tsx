import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';

import axios, {AxiosResponse} from 'axios';
import {Users} from '../model/users';
import AppCard from '../components/app_card';

function UserList(props: any) {
  console.log('Response this is test response');
  const [userData, setUserData] = useState<Users[]>([]);
  useEffect(() => {
    axios
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        console.log('Response:', response.data);
        setUserData(response.data);
      });
  }, []);
  const goToDetails = (user: Users) => {
    console.log('To Details Page', user);
    props.navigation.navigate('Details', user);
  };
  return (
    <View style={styles.sectionContainer}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={userData}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => goToDetails(item)}>
            <AppCard>
              <View style={styles.itemStyle}>
                <Text style={styles.title}>{item.name}</Text>
              </View>
            </AppCard>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    paddingHorizontal: 20,
    backgroundColor: '#F0F0F0',
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
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    borderColor: '#345',
  },
  itemStyle: {
    marginVertical: 10,
    padding: 20,
  },
});

export default UserList;
