import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import Logo from '../../../assets/images/logo.png';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  const {height} = useWindowDimensions();
  const dashBoard = () => {
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.textTitle}>Name</Text>
      <View style={styles.topSection}>
        <Text style={styles.textName}> Email</Text>
        <Text style={styles.textName}> Email@example.com</Text>
      </View>
      <Text style={styles.textTitle}> Shoe Sizes</Text>

      <View style={styles.dashboard}>
        <CustomBotton
          text="Dashboard"
          onPress={dashBoard}
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
    padding: 30,
  },
  textName: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 30,
  },
  textTitle: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
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

export default Profile;
