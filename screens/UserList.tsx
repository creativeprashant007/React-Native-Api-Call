import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';

import axios, {AxiosResponse} from 'axios';
import {Users} from '../model/users';
import AppCard from '../components/app_card';
import {useNavigation} from '@react-navigation/native';

function UserList(props: any) {
  console.log(props['type']);
  const navigation = useNavigation();
  const [userData, setUserData] = useState<Users[]>([]);

  useEffect(() => {
    if (props['type'] == 'InActive') {
      setUserData([]);
      return;
    }
    axios
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        setUserData(response.data);
      });
  }, [props['type']]);
  const goToDetails = (user: Users) => {
    navigation.navigate('Details' as never, user as never);
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
                <Text>{item.address.city}</Text>
              </View>
            </AppCard>
          </TouchableOpacity>
        )}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    
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
