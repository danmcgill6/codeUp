import React, { Component } from 'react';
import { View, Text, TouchableHighlight, ScrollView } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Card, CardSection } from './common';
import { viewMeetup } from '../actions';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiZGFubWNnaWxsNiIsImEiOiJjamVsc2c2NWQyOTJ3MzNtb3dybThvbDY5In0.QcHuHWv9zyp5woGtNJGW3A'
);

export class Meetups extends Component {
  viewMeetup(meetup) {
    this.props.viewMeetup(meetup);
  }
  render() {
    console.log(this.props.meetups)
    const attending = this.props.meetups
            .filter(meetup => meetup.Users ? meetup.Users.filter(user => user.id === this.props.user.id).length : false)
            .map(meetup => 
              <CardSection>
                <TouchableHighlight style={{ width: '100%' }} onPress={() => this.viewMeetup(meetup)}><Text>{meetup.title}</Text></TouchableHighlight>
              </CardSection>);
    const hosting = this.props.meetups
            .filter(meetup => meetup.hostId === this.props.user.id)
            .map(meetup => 
              <CardSection>
                <TouchableHighlight style={{ width: '100%' }} onPress={() => this.viewMeetup(meetup)}><Text>{meetup.title}</Text></TouchableHighlight>
              </CardSection>);
    return (
      <View>
         <Card>
         <ScrollView>
          <Text style={styles.headerText}>Attending</Text>
           {
             attending.length ? attending : 'You are not signed up for any meetups'
           }
         </ScrollView>
           <Text style={styles.headerText}>Hosting</Text>
           <ScrollView>
             {
                hosting.length ? hosting : <Text>You are not hosting any meetups</Text>
             }
          </ScrollView>
         </Card>
      </View>
    );
  }
}


const styles = {
  headerText: {
    fontSize: 30
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
};
const mapStateToProps = state => {
  console.log(state);
  return { 
      meetups: state.meetups.meetups,
      user: state.auth.user
 };
};

export default connect(mapStateToProps, { viewMeetup })(Meetups);
