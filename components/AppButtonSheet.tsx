import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";


const BottomSheetModalComponent = (props:any) => {
  return (
    <View style={styles.container}>
      {/* text header */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props['title']}</Text>
      </View>
      {/* image */}
      

      {/* furniture */}
      <View style={styles.furniture}>
        {/* rooms */}
       

        {/* baths */}
       

        {/* area */}
       
        
      </View>
      {/* end of furniture */}

     
    </View>
  );
};

export default BottomSheetModalComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lavender",
    flex: 1,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  furniture: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    alignItems: "center",
  },
  roomsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    marginLeft: 5,
  },
  bathsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 15,
    marginLeft: 15,
  },
  image: {
    width: 180,
    height: 180,
  },
  price: {
    fontWeight: "bold",
  },
  name: {
    fontWeight: "bold",
    marginRight: 10,
  },
  phone: {
    fontWeight: "bold",
  },
  areaContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});