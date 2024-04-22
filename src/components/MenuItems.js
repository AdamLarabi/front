import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';

const MenuItems = () => (
  <View style={styles.menu}>
    <View style={styles.logo}>
      <Image
        source={require('../assets/icons/logo.png')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.menuItem}>Carte</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.menuItem}>Graphes</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {}}>
      <Text style={styles.menuItem}>Chiffre brute</Text>
    </TouchableOpacity>
    {/* <TouchableOpacity>
      <Text style={styles.closeButton} onPress={() => {}}>
        Fermer
      </Text>
    </TouchableOpacity> */}
  </View>
);

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 40,
    alignSelf: 'center',
  },

  menuItem: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#202124',
    fontSize: 18,
    color: 'white',
    borderRadius: 9,
    paddingStart: 25,
  },
  closeButton: {
    padding: 10,
    fontSize: 18,
    color: 'red',
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default MenuItems;
