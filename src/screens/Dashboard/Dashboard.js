import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import Logo from '../../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';
import {Canvas} from '@react-three/fiber';

const Dashboard = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const findShoe = () => {
    navigation.navigate('Instructions');
  };

  const displayShoe = () => {
    navigation.navigate('DisplayShoe');
  };

  const profile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.root}>
      <View style={styles.topSection}>
        <Text style={styles.textNormal}>
          Hi
          <Text style={styles.textName}> Name!</Text>
        </Text>
        <CustomBotton text="Profile" onPress={profile} type="Secondary" />
      </View>

      <Text style={styles.textTitle}> Dashboard</Text>
      <Text style={styles.textSlogan}> For feet with a little more sole</Text>

      <Canvas>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>

      <CustomBotton text="Find Shoe Size" onPress={findShoe} />
      <CustomBotton text="Shop" onPress={displayShoe} />
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
  topSection: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
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
export default Dashboard;
