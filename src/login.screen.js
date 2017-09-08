import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';

export default (props) => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Login Screen!</Text>
      <Image source={require('../assets/discuss.png')} />

      {/* <Button title={'Go to List page'} onPress={() => navigate('List')} />
      <Button title={'Go to Settings page'} onPress={() => navigate('Settings')} />
      <Button title={'Go to Profile page'} onPress={() => navigate('Profile')} /> */}
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