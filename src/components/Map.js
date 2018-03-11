import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Button } from 'react-native-elements';
import { viewMeetup } from '../actions';

Mapbox.setAccessToken(
  'pk.eyJ1IjoiZGFubWNnaWxsNiIsImEiOiJjamVsc2c2NWQyOTJ3MzNtb3dybThvbDY5In0.QcHuHWv9zyp5woGtNJGW3A'
);

export class Map extends Component {

 eventHandler(meetup) {
    this.props.viewMeetup(meetup);
 }
  render() {
  const markers = this.props.meetups.map(meetup => {
    return (
        <Mapbox.PointAnnotation
          key='pointAnnotation'
          id='pointAnnotation'
          coordinate={[parseFloat(meetup.lng), parseFloat(meetup.lat)]} >
          <View style={styles.annotationContainer}>
            <Button style={styles.annotationFill} 
                    color='#f0f' 
                    text="M " 
                    onPress={() => this.eventHandler(meetup)} 
            /> 
          </View>
          <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    );
 });
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={10}
            centerCoordinate={[-74.0060,40.7128]}
            style={styles.container}>
            {markers}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    height: 30,
    borderRadius: 40,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

const mapStateToProps = (state) => {
  return {
      meetups: state.meetups.meetups
  };
 };

 export default connect(mapStateToProps, { viewMeetup })(Map);
