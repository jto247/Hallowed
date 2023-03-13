import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'Primary'}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',

    padding: 10,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_Primary: {
    backgroundColor: '#4f4176',
  },

  container_Secondary: {
    alignItems: 'flex-end',
    padding: 5,
    marginVertical: 1,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_Secondary: {
    color: '#967BB6',
  },
});

export default CustomButton;
