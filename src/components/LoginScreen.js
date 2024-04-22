// LoginScreen.js
import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignUp = () => {
    // navigation.navigate('SignUp');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Connexion</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 200}}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 200}}
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity onPress={handleSignUp} style={{marginTop: 20}}>
        <Text style={{color: 'blue'}}>
          Vous n'avez pas de compte ?{' '}
          <Text style={{fontWeight: 'bold'}}>S'inscrire</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
