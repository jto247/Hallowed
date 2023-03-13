import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign in');
    //Validate
  };

  const forgotPassPressed = () => {
    console.warn('Password Forgot');
  };

  const signUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode="contain"
      />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomBotton
        text="Forgot Password?"
        onPress={forgotPassPressed}
        type="Secondary"
      />

      <CustomBotton text="Sign In" onPress={onSignInPressed} />

      <View style={styles.signUp}>
        <Text>
          <Text style={styles.textNormal}>Don't have an account? </Text>
          <Text onPress={signUpPressed} style={styles.textClick}>
            Sign Up{' '}
          </Text>
        </Text>
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

  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 200,
  },
  textNormal: {},
  textClick: {
    color: 'white',
  },
  signUp: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default SignIn;
