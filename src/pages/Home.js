import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Btn from '../components/Btn';
import {darkBrown, brown} from '../components/Constants';

export default function Home(props) {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>FarmGuard</Text>
        <Text style={styles.subtitle}>
          Votre partenaire de confiance pour une gestion agricole intelligente
        </Text>
        <Btn
          bgColor={darkBrown}
          textColor="white"
          btnLabel="Login"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          textColor={darkBrown}
          btnLabel="Signup"
          Press={() => props.navigation.navigate('Signup')}
        />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 100,
  },
  title: {
    marginTop: '95%',
    color: 'white',
    fontSize: 45,
    fontWeight: '900',
    fontFamily: 'Poppins',
    marginBottom: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins',
    marginBottom: '20%',
  },
});
