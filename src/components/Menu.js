import React from 'react';
import {View} from 'react-native';
import MenuItems from './MenuItems';

const Menu = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#141414',
        width: 270,
        height: 340,
        position: 'absolute',
        top: 20,
        left: 0,
      }}>
      <MenuItems navigation={navigation} />
    </View>
  );
};

export default Menu;
