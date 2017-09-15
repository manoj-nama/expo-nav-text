import React, { Component } from 'react';
import {
  Text, View, StyleSheet, FlatList, ActivityIndicator,
  AsyncStorage,
  Button,
} from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      tried: false,
    }
  }

  createPost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/101', {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(createResponse => {
        console.log(createResponse);
      });
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(async posts => {
        try {
          const resp = await AsyncStorage.setItem('@APP:POSTS', JSON.stringify(posts));
        } catch (err) {
          console.log(err);
        }
        this.setState({ posts, tried: true });
      })
      .catch(async err => {
        console.log("Failed");
        try {
          const storedPosts = await AsyncStorage.getItem('@APP:POSTS');
          this.setState({ posts: JSON.parse(storedPosts) });
        } catch (err) {          
          console.log(err);
        }
      });
      this.setState({ tried: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 40 }}>
          <Button title='Create New Post' onPress={this.createPost} />
        </View>
        {
          this.state.tried ?
            (
              <FlatList
                data={this.state.posts}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => {
                  return (
                    <View style={styles.listItem}>
                      <Text style={styles.listTitle}>{item.title}</Text>
                      <Text style={styles.listBody}>{item.body.substring(30)}</Text>
                    </View>
                  )
                }}
              />
            ) : <ActivityIndicator size={'large'} color={'red'} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  listItem: {
    padding: 10,
  },
  listTitle: {
    fontSize: 18,
    color: '#07d',
  },
  listBody: {
    fontSize: 14,
    color: '#444',
  }
});
