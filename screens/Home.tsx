import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions, StyleSheet, Text, Touchable, View} from 'react-native';
import UserList from './UserList';
import Colors from '../constants/Colors';
const listTabs = [{status: 'All'}, {status: 'Active'}, {status: 'InActive'}];
function Home(props: any) {
  const [status, setStatus] = useState('All');
  const setStatusFilter = (status: any) => {
    setStatus(status);
  };
  useEffect(() => {
    console.log('here is status' + status);
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTabs.map(e => (
          <TouchableOpacity
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}>
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}>
              {e.status}{' '}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <UserList type={status} />
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    marginBottom: 20,
    marginTop: 70,
    flexDirection: 'row',
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#EBEBEB',
    padding: 10,
    justifyContent: 'center',
  },
  textTab: {fontSize: 16},
  btnTabActive: {
    backgroundColor: Colors.primary,
  },
  textTabActive: {
    color: '#FFF',
  },
});
