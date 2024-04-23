import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Background from '../components/Background';
import Header from '../components/Header';

const Acceuil = ({navigation}) => {
  return (
    <Background>
      <Header navigation={navigation} />
      <View>
        <Text style={styles.location}>salam adam</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  location: {
    fontSize: 22,
    color: '#fff',
    marginTop: 100,
    marginLeft: 20,
  },
});

export default Acceuil;
