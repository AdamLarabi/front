import React from 'react';
import {View} from 'react-native';
import MenuItems from './MenuItems';

const Menu = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: '#141414',
        width: 270,
        height: '100%',
      }}>
      <MenuItems onPress={{}} />
    </View>
  );
};

export default Menu;
