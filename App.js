import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';



class Greeting extends Component {
  render() {
    return (
      <Text style={[styles.title]}>Hello {this.props.name}!</Text>
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'powderblue', justifyContent: 'center', alignItems: 'center' }}>
          <Greeting name='David' style={{ alignItems: 'center' }} />
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={[styles.description]}>Welcome To this Prototype!</Text>
        </View>
        <View style={{ flex: 3, backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }}>
        <Button
            title="Show List"
            color="black"
            onPress={() =>
              navigate('ShowList', { name: 'David' })
            }
          />
        </View>
      </View>
    );
  }
}

class ShowListPage extends Component {
  static navigationOptions = {
    title: 'List',
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Item 1' },
            { key: 'Item 2' },
            { key: 'Item 3' },
            { key: 'Item 4' },
            { key: 'Item 5' },
            { key: 'Item 6' },
            { key: 'Item 7' },
            { key: 'Item 8' },
            { key: 'Item 9' },
            { key: 'Item 10' },
            { key: 'Item 11' },
            { key: 'Item 12' },
            { key: 'Item 13' },
            { key: 'Item 14' },
            { key: 'Item 15' },
            { key: 'Item 16' },
            { key: 'Item 17' },
            { key: 'Item 18' },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const ShowApp = StackNavigator({
  Home: { screen: HomeScreen },
  ShowList: { screen: ShowListPage },

});

export default class App extends React.Component {
  render() {
    return <ShowApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 30,
    fontSize: 18,
    borderWidth: 1,
    borderBottomColor: 'gray',
    borderStyle: 'solid',
    height: 44,
  },
  button: {
    fontSize: 18,
    color: "#841584",
    backgroundColor: 'black',
  },
  description: {
    paddingTop: 80,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  title: {
    paddingTop: 40,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'darkgray',
  },
});