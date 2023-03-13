import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/logo.png';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const onSignInPressed = () => {
    console.warn('Sign in');
  };

  const forgotPassPressed = () => {
    console.warn('Password Forgot');
  };

  const signUpPressed = () => {
    console.warn('Sign Up');
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

      <Text>
        <Text style={styles.textNormal}>Don't have an account? </Text>
        <Text onPress={signUpPressed} style={styles.textClick}>
          Sign Up{' '}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
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
});
export default SignIn;
