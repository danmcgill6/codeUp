import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { Card, CardSection } from './common';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiZGFubWNnaWxsNiIsImEiOiJjamVsc2c2NWQyOTJ3MzNtb3dybThvbDY5In0.QcHuHWv9zyp5woGtNJGW3A'
);

export class Meetups extends Component {
 

  render() {
   const meetups = this.props.meetups.map(meetup => <Text key={meetup.id}> desc { meetup.description } </Text>);
   console.log('Meetups', meetups);
    return (
      <View>
         <Card>
           <CardSection>
           {
             meetups
           }
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
         </Card>

         <Card>
           <Text style={styles.headerText}>Attending</Text>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
         </Card>

         <Card>
           <Text style={styles.headerText}>In your area</Text>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
           <CardSection>
             <Text>Hello</Text>
           </CardSection>
         </Card>

      </View>
    );
  }
}


const styles = {
  headerText: {
    fontSize: 30
  }
};
const mapStateToProps = state => {
  console.log(state);
  return { 
      meetups: state.meetups.meetups,
     
 };
}

 const mapDispatch = state => {
  return { 
      viewMeetup: dispatch(),
 };
};

export default connect(mapStateToProps, null)(Meetups);
