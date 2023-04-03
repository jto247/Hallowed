import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import Logo from '../../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';

const Instructions = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const beginScan = () => {
    navigation.navigate('Recommend');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomBotton
        text="step by step instructions... wip"
        onPress={beginScan}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7460aa',
    flex: 1,
  },
  textNormal: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    padding: 20,
  },
  textName: {
    fontWeight: 'bold',
  },
  textTitle: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
  },
  textSlogan: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 10,
  },
});

export default Instructions;
