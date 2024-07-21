import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const LoginScene = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{backgroundColor: 'red', flex: 1}}>
      <Text>LoginScene</Text>
    </TouchableOpacity>
  );
};

export default LoginScene;
