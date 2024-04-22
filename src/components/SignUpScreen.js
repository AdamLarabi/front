// SignUpScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, Button, CheckBox} from 'react-native';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignUp = () => {
    // Ajoutez votre logique pour l'inscription ici
    if (acceptedTerms) {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Confirmed Password:', confirmPassword);
      // Vous pouvez ajouter ici la logique de redirection vers la page de connexion
      navigation.navigate('Login');
    } else {
      alert('Vous devez accepter les termes pour vous inscrire.');
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Inscription</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 300}}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 300}}
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{borderWidth: 1, padding: 10, marginVertical: 10, width: 300}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 10,
        }}>
        <CheckBox value={acceptedTerms} onValueChange={setAcceptedTerms} />
        <Text style={{marginLeft: 10}}>J'accepte les termes et conditions</Text>
      </View>
      <Button title="S'inscrire" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
