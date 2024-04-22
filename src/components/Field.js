import React from 'react';
import {TextInput} from 'react-native';
import {darkBrown} from './Constants';

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkBrown,
        paddingHorizontal: 20,
        width: '75%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
        marginRight: 20,
      }}
      placeholderTextColor={'black'}></TextInput>
  );
};

export default Field;
