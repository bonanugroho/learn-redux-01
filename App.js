import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider } from 'react-redux';

import store from './src/store/store';
import CounterApp from './src/CounterApp';

// const store = createStore(reducer)

export default class App extends React.Component {
  
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
