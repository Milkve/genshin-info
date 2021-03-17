import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions , StyleSheet, Text, View, Image } from 'react-native';
import data from "../data/characters-info.json";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: 'wrap',
    height: Dimensions.get('window').height*0.8,
    width: Dimensions.get('window').width*0.9
  },
  imagen: {
    width: Dimensions.get('window').width*0.2,
    height: Dimensions.get('window').height*0.1,
    margin: Dimensions.get('window').width*0.01
  },
  
});

export default function Home() {

  const icons = data.map( (data) => {
    return (
      <Image
        key = {data.name}
        style={styles.imagen}
        source={{
          uri: data.img,
        }}
      />
    )
  });


  return (
    <View style={styles.container}>
      <View style={styles.list} accessibilityRole="tablist">
        
        {
          icons.length > 0 ? icons :
          <Text>No hay elementos!</Text>
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

