import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const forgotPassPressed = () => {
    console.warn('Password Forgot');
  };

  const onRegisterPressed = () => {
    navigation.navigate('Dashboard');
  };

  const signInPressed = () => {
    navigation.navigate('SignIn');
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
          Terms and Conditions
        </Text>
        <Text style={styles.textNormal}> and </Text>
        <Text onPress={privacy} style={styles.termsText}>
          Privacy Statement
        </Text>
      </Text>

      <View style={styles.signIn}>
        <Text>
          <Text style={styles.textNormal}>Already have an account? </Text>
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
    backgroundColor: '#7460aa',
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

  signIn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default SignUp;
