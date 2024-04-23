import {View, Text} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';

const Graphe = ({navigation}) => {
  return (
    <Background>
      <View>
        <Header navigation={navigation} />
        {/* <View>graphe</View> */}
      </View>
    </Background>
  );
};

export default Graphe;
