import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkBrown} from '../components/Constants';
import Field from '../components/Field';

const Signup = props => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.subtitle}>Create a new account</Text>
        <View style={styles.formContainer}>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Email " keyboardType={'email-address'} />
          <Field placeholder="Phone Number" keyboardType={'numeric'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By signing in, you agree to our
            </Text>
            <Text style={styles.termsLink}>Terms & </Text>
          </View>
          <View style={styles.termsContainer}>
            <Text style={styles.termsLink}>Conditions</Text>
            <Text style={styles.termsText}> and </Text>
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkBrown}
            btnLabel="Signup"
            Press={() => {
              alert('Account created');
              props.navigation.navigate('Login');
            }}
          />
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account ?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Login</Text>
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
    marginTop: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: 460,
    borderTopLeftRadius: 130,
    paddingTop: 50,
    alignItems: 'center',
  },
  termsContainer: {
    flexDirection: 'row',
    width: '78%',
    paddingRight: 16,
    marginLeft: 50,
  },
  termsText: {
    color: 'grey',
    fontSize: 16,
  },
  termsLink: {
    color: darkBrown,
    fontWeight: 'bold',
    fontSize: 16,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    color: darkBrown,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Signup;
