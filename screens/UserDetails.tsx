import React from 'react';
import {Text, View} from 'react-native';
import {Users} from '../model/users';

function UserDetails(props: any) {
  var users = props.route.params as Users;

  return (
    <View>
      <Text>{users.name}</Text>
    </View>
  );
}

export default UserDetails;
