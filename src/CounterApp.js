import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";

import * as actionTypes from './store/actions';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: "orange", width: "80%", height: 50, justifyContent:"center", alignItems:"center"}}>
          <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            margin: 10
          }}
        >
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Decrease</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Increase</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: 200,
            justifyContent: "space-around",
            margin: 10
          }}
        >
          <TouchableOpacity onPress={() => this.props.minCounter()}>
            <Text style={{ fontSize: 20 }}>- 5 </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.addCounter()}>
            <Text style={{ fontSize: 20 }}>+ 5</Text>
          </TouchableOpacity>
        </View>
        
        <Button title='Show Result' onPress={() => this.props.storeResult()}></Button>
        {this.props.storedResults.map(strResult => (
          <TouchableOpacity key={strResult.id} onPress={() => this.props.deleteResult(strResult.id)}>
            <Text style={{ fontSize: 20 }}>{strResult.value}</Text>
          </TouchableOpacity>
        ))}
        
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    storedResults: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: actionTypes.INCREASE_COUNTER }),
    decreaseCounter: () => dispatch({ type: actionTypes.DECREASE_COUNTER }),
    addCounter: () => dispatch({ type: actionTypes.ADD_COUNTER, value: 5 }),
    minCounter: () => dispatch({ type: actionTypes.MIN_COUNTER, value: 5 }),
    storeResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    deleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resElId: id })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
