import React from 'react';
import {Text, View} from 'react-native';
import {Users} from '../model/users';
import Snackbar from 'react-native-snackbar';

function UserDetails(props: any) {
  var users = props.route.params as Users;
  Snackbar.show({
    text: 'Hello world',
    duration: Snackbar.LENGTH_SHORT,
  });

  return (
    <View>
      <Text>{users.name}</Text>
    </View>
  );
}

export default UserDetails;
