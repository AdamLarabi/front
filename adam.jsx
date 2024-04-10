import React from 'react';

import {View, Text, StatusBar, StyleSheet} from 'react-native';

function adam() {
  return (
    <View style={styles.head}>
      <Text>salut je suis adam larabi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    padding: StatusBar.currentHeight,
    backgroundColor: 'tomato',
  },
});

export default adam;
