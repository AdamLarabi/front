import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const MenuItems = ({navigation}) => (
  <View style={styles.menu}>
    <View style={styles.logo}>
      <Image
        source={require('../assets/icons/logo.png')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Carte');
      }}>
      <Text style={styles.menuItem}>Carte</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Graphe');
      }}>
      <Text style={styles.menuItem}>Graphes</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Chiffre');
      }}>
      <Text style={styles.menuItem}>Chiffre brute</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
    height: 100,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
    alignSelf: 'center',
  },

  menuItem: {
    padding: 7,
    marginBottom: 15,
    backgroundColor: '#202124',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    borderRadius: 9,
    paddingStart: 25,
  },
});

export default MenuItems;
