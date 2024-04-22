import React from 'react';
import {View, Text, ImageBackground, Animated} from 'react-native';

export default function MyComponent({children}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/background7.jpg')}
        style={{opacity: 0.9, flex: 1}}>
        <View style={{flex: 1}}>{children}</View>
      </ImageBackground>
    </View>
  );
}
