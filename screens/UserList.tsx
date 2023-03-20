import React, {useState, useCallback, useEffect, useRef, useMemo} from 'react';
import {
  Alert,
  Pressable,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';

import axios, {AxiosResponse} from 'axios';
import {Users} from '../model/users';
import AppCard from '../components/app_card';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';

function UserList(props: any) {
  console.log(props['type']);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState<Users[]>([]);

  const [loading, setLoading] = useState(true);
  // ref
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%', '25%'], []);
  const openModal = (user: Users) => {
    bottomSheetModalRef;
  };
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
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
    //  openModal(user);
    //setModalVisible(true);
    navigation.navigate('Details' as never, user as never);
  };
  if (loading)
    return (
      <View style={styles.loading}>
        <Text>Loading ...</Text>
      </View>
    );
  return (
    <View style={styles.sectionContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      {/* <BottomSheet
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}
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
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default UserList;
