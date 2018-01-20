/**
* @providesModule HomeScreen
*/

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Home</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 15
  }
});

const mapStateToProps = state => ({
  app: state.app
})

export default connect(mapStateToProps)(HomeScreen)