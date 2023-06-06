import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import Logo from '../../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';
import {Canvas} from '@react-three/fiber';
import DisplayShoe from '../../screens/DisplayShoe';
import {render, screen, fireEvent} from '@testing-library/react-native';

const Recommend = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const dashBoard = () => {
    navigation.navigate('Dashboard');
  };

  const test = () => {
    const start = performance.now();
    render(<DisplayShoe />);
    const end = performance.now();
    const loadingTime = end - start;
    console.log(loadingTime);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.textName}> Name, your shoe size is </Text>
      <Text style={styles.textTitle}> 10 </Text>
      <Text style={styles.textName}> Recommended Shoes </Text>
      <DisplayShoe />

      <View style={styles.dashboard}>
        <CustomBotton
          text="Dashboard"
          onPress={test}
          style={styles.dashboard}
        />
      </View>
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
    fontSize: 20,
  },
  textTitle: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
    padding: 20,
  },
  textSlogan: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 10,
  },

  dashboard: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },
});

export default Recommend;
