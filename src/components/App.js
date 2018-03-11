
import React, { Component } from 'react';
import { View } from 'react-native';
import Router from '../Router';
import { fetchMeetupData } from '../actions';
import { connect } from 'react-redux';

export class App extends Component {
  componentDidMount() {  
    this.props.fetchInitialData();
  }
  render() {
    return (
      <Router />
    );
  }
}
const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchMeetupData());
  }
});
export default connect(null, mapDispatch)(App);
