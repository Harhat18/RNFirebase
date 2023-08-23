import {Text, SafeAreaView, Button} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';

const App = () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const signIn = () => {
    auth()
      .signInWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(res => console.log('Signed In'))
      .catch(err => console.log(err));
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(res => console.log('Signed Out'))
      .catch(err => console.log(err));
  };
  const checkUser = () => {
    const user = auth().currentUser;

    console.log(user);
  };

  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Miray</Text>
      <Button title="Sign Up" onPress={signUp} />
      <Button title="Sign In" onPress={signIn} />
      <Button title="Sign Out" onPress={signOut} />
      <Button title="Check User" onPress={checkUser} />
    </SafeAreaView>
  );
};

export default App;
