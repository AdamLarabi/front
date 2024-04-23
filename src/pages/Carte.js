import {View, Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';

const Carte = ({navigation}) => {
  return (
    <Background>
      <Header navigation={navigation} />
      <View>
        <Text style={{fontSize: 22, color: '#fff'}}>salam adam</Text>
      </View>
    </Background>
  );
};

export default Carte;
