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
    title: 'Welcome',
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
            style={[styles.button]}
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
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            { key: 'Devin' },
            { key: 'Jackson' },
            { key: 'James' },
            { key: 'Joel' },
            { key: 'John' },
            { key: 'Jillian' },
            { key: 'Jimmy' },
            { key: 'Julie' },
            { key: 'Maral' },
            { key: 'Anahita' },
            { key: 'Majid' },
            { key: 'Faranak' },
            { key: 'Hasan' },
            { key: 'Esmaeil' },
            { key: 'Simin' },
            { key: 'jooojoo' },
            { key: 'jooojoo222' },
            { key: 'jooojo3333o' },
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
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderBottomColor: 'black',
    borderStyle: 'solid',
    height: 44,
  },
  button: {
    color: "#841584",
    backgroundColor: 'black',
  },
  description: {
    paddingTop: 80,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  title: {
    paddingTop: 50,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'darkgray',
  },
});