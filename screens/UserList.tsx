import React, {useState, useEffect,useRef, useMemo } from 'react';
import {StyleSheet, Text, TouchableOpacity, FlatList, View} from 'react-native';

import axios, {AxiosResponse} from 'axios';
import {Users} from '../model/users';
import AppCard from '../components/app_card';
import {useNavigation} from '@react-navigation/native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import BottomSheetModalComponent from '../components/AppButtonSheet';

function UserList(props: any) {
  console.log(props['type']);
  const navigation = useNavigation();
  const [userData, setUserData] = useState<Users[]>([]);

  const [loading, setLoading] = useState(true);
   // ref
   const bottomSheetModalRef = useRef(null);

   // variables
   const snapPoints = useMemo(() => ["50%"], []);
   const openModal = (user:Users) => {
    bottomSheetModalRef;
   
  };
  useEffect(() => {
    setLoading(true);
    if (props['type'] == 'InActive') {
      setUserData([]);
      setLoading(false);
      return;
    }
    axios
      .get<Users[]>('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse) => {
        setUserData(response.data);
      });
      setLoading(false);
  }, [props['type']]);

  const goToDetails = (user: Users) => {
    openModal(user);
    // navigation.navigate('Details' as never, user as never);
  };
  if(loading)
  return (
    <View style={styles.loading}>
      <Text>Loading ...</Text>
    </View>
  );
  return (
    <BottomSheetModalProvider>
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
    <BottomSheetModal
    ref={bottomSheetModalRef}
    index={0}
    snapPoints={snapPoints}
   
  >
    <BottomSheetModalComponent  />
    {/* <View style={styles.contentContainer}>
      <Text>Awesome 🎉</Text>
    </View> */}
  </BottomSheetModal>
  </BottomSheetModalProvider>
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
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default UserList;
