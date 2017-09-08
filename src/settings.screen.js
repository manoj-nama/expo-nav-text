import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

export default (props) => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Settings!</Text>
      <Button title={'Go to Login page'} onPress={() => navigate('Login')} />
      <Button title={'Go to List page'} onPress={() => navigate('List')} />
      <Button title={'Go to Profile page'} onPress={() => navigate('Profile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 30,
    fontWeight: '100',
  }
});