import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkBrown, brown} from '../components/Constants';
import Field from '../components/Field';

const Login = props => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.formContainer}>
          <Text style={styles.beforeSub}>Welcome Back</Text>
          <Text style={styles.subtitle}>Login to your account</Text>
          <Field
            style={styles.input}
            placeholder="Email"
            keyboardType={'email-address'}
          />
          <Field
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
          <Btn
            textColor="white"
            bgColor={darkBrown}
            btnLabel="Login"
            Press={() => props.navigation.navigate('Acceuil')}
          />
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account ? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text style={[styles.signupText, styles.signupLink]}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 460,
  },
  title: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: 460,
    borderTopLeftRadius: 130,
    paddingTop: 100,
    alignItems: 'center',
  },
  beforeSub: {
    fontSize: 40,
    color: darkBrown,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'grey',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    color: 'black',
    width: '78%',
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: brown,
    marginBottom: 20,
  },
  forgotPassword: {
    color: darkBrown,
    fontWeight: 'bold',
    fontSize: 16,
    alignSelf: 'flex-end',
    marginRight: 16,
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupLink: {
    color: darkBrown,
  },
});

export default Login;
