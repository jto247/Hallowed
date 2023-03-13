import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgotPassPressed = () => {
    console.warn('Password Forgot');
  };

  const onRegisterPressed = () => {
    console.warn('Sign Up');
  };

  const signInPressed = () => {
    console.warn('Sign In');
  };

  const terms = () => {
    console.warn('Terms');
  };

  const privacy = () => {
    console.warn('Privacy');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}> Create Account </Text>

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        secureTextEntry={true}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />

      <CustomBotton text="Sign Up" onPress={onRegisterPressed} />

      <Text>
        <Text style={styles.textNormal}>
          By clicking Sign up, you agree to our{' '}
        </Text>
        <Text onPress={terms} style={styles.termsText}>
          Terms and Conditions{' '}
        </Text>
        <Text style={styles.textNormal}>and </Text>
        <Text onPress={privacy} style={styles.termsText}>
          Privacy Statement{' '}
        </Text>
      </Text>

      <View style={styles.signUp}>
        <Text>
          <Text style={styles.textNormal}>Already Have an account? </Text>
          <Text onPress={signInPressed} style={styles.textClick}>
            Sign In{' '}
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
    flex: 1,
  },
  textNormal: {},
  textClick: {
    color: 'white',
  },

  termsText: {
    color: 'white',
    textDecorationLine: 'underline',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d6b15f',
    margin: 10,
  },

  signUp: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default SignUp;
